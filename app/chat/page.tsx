import Link from "next/link";
import { Bot, Circle, Home } from "lucide-react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
            <Bot size={21} />
          </span>
          <div>
            <h1 className="font-semibold text-slate-950 dark:text-white">Student Helpdesk AI</h1>
            <p className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
              <Circle size={8} fill="currentColor" />
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400"
            aria-label="Go home"
            title="Go home"
          >
            <Home size={18} />
          </Link>
        </div>
      </header>
      <ChatWindow />
    </main>
  );
}
