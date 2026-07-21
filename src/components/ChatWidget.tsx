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
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[1000] flex flex-col items-end font-sans"
    >
      <style jsx>{`
        .chat-custom-scroll::-webkit-scrollbar {
          width: 4px;
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

      {/* Main Container Wrapper */}
      <div className="relative flex flex-col items-end">
        {/* Chat Window */}
        {open && (
          <div className="chat-widget mb-3 flex h-[68vh] sm:h-[460px] max-h-[500px] w-[calc(100vw-2rem)] xs:w-[310px] sm:w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-overlay px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-[15px] font-semibold">
              <span className="text-primary">Retnavia Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} className="sm:h-[18px] sm:w-[18px]" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="chat-custom-scroll flex-1 overflow-y-auto p-2.5 sm:p-3">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`my-1.5 sm:my-2 ${
                    m.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block max-w-[88%] sm:max-w-[85%] rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm leading-relaxed sm:leading-snug text-left text-foreground ${
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
                <p className="my-1 text-xs text-accent">Thinking...</p>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Footer */}
            <div className="flex border-t border-border bg-overlay p-2 sm:p-2.5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask a question..."
                className="flex-1 min-w-0 rounded-lg border border-border bg-black/20 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-foreground outline-none focus:border-primary/50"
              />
              <button
                onClick={send}
                disabled={loading}
                className={`ml-2 flex shrink-0 items-center justify-center rounded-lg bg-primary px-2.5 py-1.5 sm:px-3 sm:py-2 ${
                  loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                }`}
              >
                <Send size={14} color="#000" className="sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Compact Popup Card (Top-Mid Logo + Perfect Alignment) */}
        {!open && showPromptCard && (
          <div className="absolute bottom-[calc(100%+12px)] right-0 z-10 w-[180px] sm:w-[210px] rounded-2xl border border-primary bg-background px-3 pb-3 pt-5 sm:pt-6 shadow-xl text-center transition-all">

            {/* Header Logo - Centered Top Badge */}
            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border-2 border-primary shadow-md overflow-hidden">
                <Image
                  src="/agentlogo.png"
                  alt="Retnavia Assistant"
                  width={20}
                  height={20}
                  className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                />
              </div>
            </div>

            {/* Close Button Top Right */}
            <button
              onClick={() => setShowPromptCard(false)}
              className="absolute right-2 top-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close message card"
            >
              <X size={12} className="sm:h-3.5 sm:w-3.5" />
            </button>

            {/* Card Text */}
            <p className="text-[11px] sm:text-xs font-medium text-foreground leading-snug">
              Got any questions? We are happy to help.
            </p>

            {/* Seamless Chat Bubble Tail */}
            <div className="absolute -bottom-[5px] right-4 sm:right-5 h-2.5 w-2.5 rotate-45 border-r border-b border-primary bg-background" />
          </div>
        )}

        {/* Chatbot Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full border border-border bg-white text-black shadow-[0_4px_16px_var(--primary-glow)] transition-transform duration-200 hover:scale-105 active:scale-95"
          aria-label="Toggle chat"
        >
          {open ? (
            <X size={18} className="text-primary sm:h-5 sm:w-5" />
          ) : (
            <MessagesSquare size={20} className="text-primary sm:h-6 sm:w-6" />
          )}
        </button>
      </div>
    </div>
  );
}