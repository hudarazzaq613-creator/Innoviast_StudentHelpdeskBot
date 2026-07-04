const faqs = [
  {
    question: "How accurate are the answers?",
    answer: "Answers are based on the local knowledge base and assistant rules. For official decisions, students should confirm with the relevant office.",
  },
  {
    question: "Can I ask scholarship questions?",
    answer: "Yes. The assistant supports merit-based, need-based, and document-related scholarship guidance.",
  },
  {
    question: "Does the chatbot remember previous messages?",
    answer: "It keeps the latest messages during the current chat session to understand follow-up questions.",
  },
  {
    question: "Can I ask non-university questions?",
    answer: "No. The assistant politely declines topics outside university helpdesk support.",
  },
];

export function Faq() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-md border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-950">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-950 dark:text-white">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
