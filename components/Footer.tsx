import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
          <Bot size={18} />
          Student Helpdesk AI
        </div>
        <p>Built with Next.js, Groq, and a focused university knowledge base.</p>
      </div>
    </footer>
  );
}
