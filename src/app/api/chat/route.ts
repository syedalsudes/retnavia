import { GoogleGenerativeAI } from "@google/generative-ai";
import vectors from "../../../../data/vectors.json";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const IS_DEV = process.env.NODE_ENV === "development";

interface VectorChunk {
  text: string;
  embedding: number[];
  source: string;
}

function cosineSim(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] ** 2;
    magB += b[i] ** 2;
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string" || question.length > 500) {
      return Response.json({ answer: "Please type a valid question." });
    }

    const embedModel = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
    const qEmb = (await embedModel.embedContent(question)).embedding.values;

    const scored = (vectors as VectorChunk[])
      .map(v => ({ ...v, score: cosineSim(qEmb, v.embedding) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    if (!scored.length || scored[0].score < 0.5) {
      return Response.json({
        answer: "Sorry, this information is not available on the website.",
      });
    }

    const context = scored.map(s => s.text).join("\n\n");

    const chatModel = genAI.getGenerativeModel({ model: "gemini-3.5-flash-lite" });
    const prompt = `You are the official AI assistant of the Retnavia website.

STRICT RULES:
1. Answer ONLY using the context provided below. Never use your general knowledge.
2. LANGUAGE RULE (very important): Always reply in the EXACT same language and style the user asked in.
   - English question → reply in English
   - Roman Urdu / Hinglish (Urdu written in English letters) → reply in Roman Urdu
   - Urdu script → reply in Urdu script
   - Any other language → reply in that same language
3. If the answer is not in the context, say (in the user's language) that this information is not available on the website.
4. Keep answers short, friendly, and professional.
5. If the user asks about pricing or timelines, share the ranges from context and mention exact quotes depend on requirements — invite them to contact info@retnavia.com.
6. If the user wants to discuss a project or book a meeting, direct them to https://retnavia.com/consultant

Context:
${context}

User's question: ${question}`;

    const result = await chatModel.generateContent(prompt);
    return Response.json({ answer: result.response.text() });
  } catch (err) {
    if (IS_DEV) {
      console.error("Chat API error:", err);
    } else {
      console.error("Chat API error:", err instanceof Error ? err.message : "Unknown error");
    }
    return Response.json(
      { answer: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}