export function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white">
        AI
      </span>
      <div className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.1s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
      </div>
    </div>
  );
}
