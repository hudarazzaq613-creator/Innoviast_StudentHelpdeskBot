"use client";

import { SendHorizonal } from "lucide-react";
import { FormEvent } from "react";
import { maxMessageLength } from "@/constants/chat";

type ChatInputProps = {
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function ChatInput({ value, disabled, onChange, onSubmit }: ChatInputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-4xl items-end gap-2">
        <div className="flex-1">
          <textarea
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Ask about admissions, fees, scholarships, attendance, exams..."
            rows={1}
            maxLength={maxMessageLength + 1}
            disabled={disabled}
            className="max-h-32 min-h-12 w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-70 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                onSubmit();
              }
            }}
          />
          <div className="mt-1 text-right text-xs text-slate-400">
            {value.length}/{maxMessageLength}
          </div>
        </div>
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700"
          aria-label="Send message"
          title="Send message"
        >
          <SendHorizonal size={19} />
        </button>
      </div>
    </form>
  );
}
