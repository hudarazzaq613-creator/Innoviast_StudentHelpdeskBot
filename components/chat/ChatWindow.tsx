"use client";

import { useEffect, useRef, useState } from "react";
import { suggestedQuestions, maxMessageLength } from "@/constants/chat";
import { ApiChatMessage, ChatMessage, ChatResponse } from "@/types";
import { ChatInput } from "@/components/chat/ChatInput";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { SuggestedQuestions } from "@/components/chat/SuggestedQuestions";
import { TypingIndicator } from "@/components/chat/TypingIndicator";

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello\n\nI'm Student Helpdesk AI.\n\nI can assist you with:\n\n- Admissions\n- Scholarships\n- Fee Structure\n- Attendance\n- Examinations\n- Library\n- Hostel\n- Campus Facilities\n\nHow can I help you today?",
};

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
  };
}

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  async function sendMessage(rawMessage = input) {
    const content = rawMessage.trim();

    if (!content) {
      setNotice("Please enter a question before sending.");
      return;
    }

    if (content.length > maxMessageLength) {
      setNotice("Your message is too long. Please keep it under 500 characters.");
      return;
    }

    setNotice("");
    setInput("");
    setIsLoading(true);

    const userMessage = createMessage("user", content);
    const visibleMessages = [...messages, userMessage];
    setMessages(visibleMessages);

    const history: ApiChatMessage[] = visibleMessages
      .filter((message) => message.id !== "welcome")
      .slice(-10)
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, history }),
      });
      const data = (await response.json()) as ChatResponse;

      if (!data.success) {
        setMessages((current) => [...current, createMessage("assistant", data.error)]);
        return;
      }

      setMessages((current) => [...current, createMessage("assistant", data.reply)]);
    } catch {
      setMessages((current) => [
        ...current,
        createMessage(
          "assistant",
          "Unable to connect to the AI service. Please check your internet connection and try again.",
        ),
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-slate-50 dark:bg-slate-950">
      <div className="flex-1 overflow-y-auto px-4 py-6 chat-scrollbar">
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {messages.length === 1 && (
            <div className="rounded-md border border-dashed border-slate-300 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-950 dark:text-white">
                Welcome to Student Helpdesk AI
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Ask anything related to admissions, fees, scholarships, attendance, or exams.
              </p>
            </div>
          )}
          <SuggestedQuestions
            questions={suggestedQuestions}
            onSelect={sendMessage}
            disabled={isLoading}
          />
          {isLoading && <TypingIndicator />}
          {notice && (
            <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
              {notice}
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
      <ChatInput
        value={input}
        disabled={isLoading}
        onChange={setInput}
        onSubmit={() => sendMessage()}
      />
    </div>
  );
}
