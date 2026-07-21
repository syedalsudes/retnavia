"use client";
import { Bot, MessagesSquare, Send, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Msg {
  role: "user" | "bot";
  text: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showPromptCard, setShowPromptCard] = useState(true);
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
    <div
      dir="ltr"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[1000] flex flex-col items-end gap-3 max-w-full font-sans"
    >
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
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chat-custom-scroll flex-1 overflow-y-auto p-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`my-2 ${m.role === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block max-w-[85%] rounded-xl px-3 py-2 text-sm leading-snug text-left text-foreground ${m.role === "user"
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
              className={`ml-2 flex shrink-0 items-center justify-center rounded-lg bg-primary px-3 py-2 ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                }`}
            >
              <Send size={16} color="#000" />
            </button>
          </div>
        </div>
      )}

{/* Top Message Card (Poochhne wala Box) */}
{!open && showPromptCard && (
  <div className="relative mb-3 w-60 sm:w-64 rounded-2xl border border-primary bg-background/90 px-4 pb-4 pt-8 shadow-lg text-center">

    {/* Header Logo */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-primary shadow-md overflow-hidden">
        <Image
          src="/agentlogo.png"
          alt="Retnavia Assistant"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </div>
    </div>

    {/* Close Button Top Right */}
    <button
      onClick={() => setShowPromptCard(false)}
      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Close message card"
    >
      <X size={16} />
    </button>

    {/* Card Text */}
    <p className="text-sm font-medium text-foreground leading-snug">
      Got any questions? We are happy to help.
    </p>

    {/* Seamless Chat Bubble Tail */}
    <div className="absolute -bottom-[6px] right-6 h-3 w-3 rotate-45 border-r border-b border-primary bg-background" />
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
          <MessagesSquare size={24} className="text-primary sm:h-7 sm:w-7" />
        )}
      </button>
    </div>
  );
}