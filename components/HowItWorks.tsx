import { MessageSquareText, SearchCheck, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageSquareText, title: "Ask your question" },
  { icon: SearchCheck, title: "AI checks university context" },
  { icon: Sparkles, title: "Receive a focused response" },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
          How it works
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-md border border-slate-200 p-6 dark:border-slate-800"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-blue-600 dark:bg-slate-900 dark:text-sky-300">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-semibold text-slate-400">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
