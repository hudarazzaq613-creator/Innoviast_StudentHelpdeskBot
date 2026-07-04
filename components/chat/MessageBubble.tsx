import { Bot, User } from "lucide-react";
import { ChatMessage } from "@/types";

type MessageBubbleProps = {
  message: ChatMessage;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white">
          <Bot size={17} />
        </span>
      )}
      <div
        className={`max-w-[82%] whitespace-pre-wrap rounded-md px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[72%] ${
          isUser
            ? "bg-blue-600 text-white"
            : "border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
        }`}
      >
        {message.content}
      </div>
      {isUser && (
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <User size={17} />
        </span>
      )}
    </div>
  );
}
