"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function ChatBubbleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-slate-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, status } =
    useChat({
      api: "/api/chat",
    });

  const isStreaming = status === "streaming";

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Show tooltip after 30s if chat hasn't been opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide tooltip when chat opens
  useEffect(() => {
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  return (
    <div className="fixed bottom-2.5 right-2 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm font-medium text-slate-100">
                  Cornerstone Support
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-slate-400 text-sm mt-8">
                  <p className="mb-1">👋 Hey there!</p>
                  <p>
                    Got questions about Cornerstone? Ask away — scheduling,
                    features, pricing, whatever&apos;s on your mind.
                  </p>
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-cyan-600 text-white rounded-br-md"
                        : "bg-slate-800 text-slate-100 rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isStreaming &&
                messages.length > 0 &&
                messages[messages.length - 1].role === "user" && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 rounded-2xl rounded-bl-md">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-slate-700 bg-slate-900"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about Cornerstone..."
                className="flex-1 bg-slate-800 text-slate-100 placeholder-slate-400 text-sm rounded-xl px-4 py-2.5 border border-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:hover:bg-cyan-600 text-white rounded-xl transition-colors"
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center transition-transform"
        style={{ cursor: "pointer" }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center"><CloseIcon /></div> : (
          <div className="flex flex-col items-center cursor-pointer">
            <Image src="/chatbot-icon.png" unoptimized alt="Chat" width={300} height={300} className="object-contain drop-shadow-lg w-[150px] h-[150px] sm:w-[225px] sm:h-[225px] md:w-[300px] md:h-[300px] chatbot-landscape" />
            <span className="text-emerald-400 text-[11px] font-medium md:hidden -mt-14 chatbot-label-mobile">Chat with us</span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
