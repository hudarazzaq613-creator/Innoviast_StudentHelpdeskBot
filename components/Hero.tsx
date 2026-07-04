import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.28),rgba(20,184,166,0.16),rgba(15,23,42,0))]" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-sky-300/30 bg-white/8 px-3 py-2 text-sm text-sky-100">
            <GraduationCap size={17} />
            Intelligent University Assistant
          </div>
          <h1 className="max-w-3xl text-5xl font-bold tracking-normal sm:text-6xl lg:text-7xl">
            Student Helpdesk AI
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Your intelligent university assistant for admissions, fees, scholarships,
            attendance, examinations, and campus services.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/chat"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-6 font-semibold text-white transition hover:bg-blue-400"
            >
              Start Chatting
              <ArrowRight size={18} />
            </Link>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 font-semibold text-white transition hover:border-sky-300 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative z-10">
          <div className="rounded-md border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-md bg-slate-950/80 p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-semibold">Live Helpdesk</span>
                <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>
              <div className="space-y-3">
                <div className="max-w-[82%] rounded-md bg-white p-3 text-sm text-slate-900">
                  How can I apply for admission?
                </div>
                <div className="ml-auto max-w-[86%] rounded-md bg-blue-500 p-3 text-sm text-white">
                  Complete the online form, upload documents, pay the application
                  fee, and follow the merit list updates from the admissions office.
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-200">
                  <span className="rounded-md border border-white/10 px-3 py-2">Fees</span>
                  <span className="rounded-md border border-white/10 px-3 py-2">Library</span>
                  <span className="rounded-md border border-white/10 px-3 py-2">Scholarships</span>
                  <span className="rounded-md border border-white/10 px-3 py-2">Transport</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
