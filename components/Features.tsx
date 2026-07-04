import {
  Banknote,
  BookOpen,
  Building2,
  CalendarCheck,
  ClipboardList,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Admission Assistance",
    description: "Guides students through application steps, eligibility, and required documents.",
  },
  {
    icon: Building2,
    title: "Scholarship Guidance",
    description: "Explains merit-based and need-based scholarship options in clear language.",
  },
  {
    icon: Banknote,
    title: "Fee Information",
    description: "Shares semester fee categories, payment guidance, and finance office direction.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Policy",
    description: "Helps students understand attendance requirements and shortage cases.",
  },
  {
    icon: ClipboardList,
    title: "Exam Information",
    description: "Answers common exam, admit card, result, and retake process questions.",
  },
  {
    icon: BookOpen,
    title: "Campus Facilities",
    description: "Covers library, hostel, transport, labs, and student affairs support.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Fast answers for student services
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A focused assistant keeps conversations on university support topics and
            responds with practical next steps.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-sky-400/10 dark:text-sky-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
