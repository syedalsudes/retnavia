import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error("GEMINI_API_KEY missing! check .env.local");

const genAI = new GoogleGenerativeAI(apiKey);
const embedModel = genAI.getGenerativeModel({ model: "gemini-embedding-001" });

const urls = [
  "https://retnavia.com",
  "https://retnavia.com/about",
  "https://retnavia.com/services",
  "https://retnavia.com/portfolio",
  "https://retnavia.com/consultant",
  "https://retnavia.com/contact",
];

async function scrape(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  $("script, style, nav, footer").remove();
  return $("body").text().replace(/\s+/g, " ").trim();
}

function makeChunks(text, size = 800, overlap = 100) {
  const chunks = [];
  for (let i = 0; i < text.length; i += size - overlap) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

async function embedChunks(chunks, source, store) {
  for (const chunk of chunks) {
    const res = await embedModel.embedContent(chunk);
    store.push({ text: chunk, embedding: res.embedding.values, source });
  }
}

const store = [];

for (const url of urls) {
  try {
    const text = await scrape(url);
    const chunks = makeChunks(text);
    await embedChunks(chunks, url, store);
    console.log(`✓ ${url} (${chunks.length} chunks)`);
  } catch (err) {
    console.error(`✗ ${url} failed: ${err.message}`);
  }
}

const knowledgePath = path.join(process.cwd(), "data", "knowledge.txt");
if (fs.existsSync(knowledgePath)) {
  const kText = fs.readFileSync(knowledgePath, "utf-8");
  const chunks = makeChunks(kText);
  await embedChunks(chunks, "knowledge", store);
  console.log(`✓ knowledge.txt (${chunks.length} chunks)`);
} else {
  console.warn("⚠ knowledge.txt not found — skipping");
}

if (!store.length) throw new Error("No chunks created — check URLs and network");

const outDir = path.join(process.cwd(), "data");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

fs.writeFileSync(path.join(outDir, "vectors.json"), JSON.stringify(store));
console.log(`Done! Total ${store.length} chunks saved.`);