import Link from "next/link";
import { Bot, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
            <Bot size={22} />
          </span>
          <span>Student Helpdesk AI</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/chat"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <MessageCircle size={17} />
            Start Chat
          </Link>
        </div>
      </div>
    </header>
  );
}
