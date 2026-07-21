"use client";
import { Bot, Send, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Msg {
  role: "user" | "bot";
  text: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hello! I'm Retnavia's AI Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  async function send() {
    if (!input.trim() || loading) return;
    const question = input;
    setMsgs((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "bot", text: data.answer }]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "bot", text: "Connection error, please try again." },
      ]);
    }
    setLoading(false);
  }

  return (
    /* Main Fixed Wrapper: Mobile per bottom-4 right-4, desktop per bottom-8 right-8 */
    <div dir="ltr" className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[1000] flex flex-col items-end gap-3 max-w-full">
      <style jsx>{`
        .chat-custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .chat-custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .chat-custom-scroll::-webkit-scrollbar-thumb:hover {
          background: var(--primary);
        }
        .chat-widget ::selection {
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
        }
      `}</style>

      {/* Chat Window: Mobile per 100vw minus padding, Desktop per 360px */}
      {open && (
        <div className="chat-widget flex h-[75vh] max-h-[500px] w-[calc(100vw-2rem)] sm:w-[360px] sm:h-[460px] flex-col overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-overlay px-4 py-3 text-[15px] font-semibold">
            <span className="text-primary">Retnavia Assistant</span>
          </div>

          {/* Messages Body */}
          <div className="chat-custom-scroll flex-1 overflow-y-auto p-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`my-2 ${m.role === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block max-w-[85%] rounded-xl px-3 py-2 text-sm leading-snug text-left text-foreground ${
                    m.role === "user"
                      ? "bg-primary-glow shadow-[0_2px_10px_rgba(147,51,234,0.3)]"
                      : "border border-border bg-overlay"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}

            {loading && (
              <p className="my-1.5 text-[13px] text-accent">Thinking...</p>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Footer */}
          <div className="flex border-t border-border bg-overlay p-2.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask a question..."
              className="flex-1 min-w-0 rounded-lg border border-border bg-black/20 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/50"
            />
            <button
              onClick={send}
              disabled={loading}
              className={`ml-2 flex shrink-0 items-center justify-center rounded-lg bg-primary px-3 py-2 ${
                loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
              }`}
            >
              <Send size={16} color="#000" />
            </button>
          </div>
        </div>
      )}

{/* Floating Speech Bubble (Jab Chat Closed Ho) */}
{!open && (
  <div className="relative flex max-w-[calc(100vw-5rem)] items-center gap-2 rounded-2xl rounded-br-xs border border-border bg-background/90 px-3 py-2 text-[11px] font-semibold text-foreground shadow-xl backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-xs">
    <Bot size={15} className="shrink-0 text-primary sm:h-4 sm:w-4" />
    <span className="whitespace-nowrap truncate">How can I assist you?</span>
    <div className="absolute -bottom-[5px] right-4 h-2.5 w-2.5 rotate-45 border-b border-r border-border bg-background" />
  </div>
)}

{/* Chatbot Toggle Button */}
<button
  onClick={() => setOpen(!open)}
  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-white text-black shadow-[0_4px_20px_var(--primary-glow)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
  aria-label="Toggle chat"
>
  {open ? (
    <X size={22} className="text-primary sm:h-6 sm:w-6" />
  ) : (
    <Image
      src="/agentlogo.png"
      alt="Retnavia Assistant"
      width={34}
      height={34}
      className="h-7 w-7 object-contain sm:h-8 sm:w-8"
    />
  )}
</button>
    </div>
  );
}