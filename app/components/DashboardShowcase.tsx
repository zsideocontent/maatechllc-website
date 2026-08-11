import Image from "next/image";
import { Check } from "lucide-react";

const points = [
  "Every lead, call, and form fill in one place, synced daily from Google Ads",
  "Live ROAS and cost-per-lead, no spreadsheet stitching required",
  "Campaign health checks that flag disapproved ads before they cost you a day of spend",
  "Built to make campaigns convert better, not just report on them after the fact",
];

export default function DashboardShowcase() {
  return (
    <section id="work" className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
              Real Work, Not a Mockup
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 text-balance">
              An AI agentic dashboard that helps campaigns convert better
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Built for one of our clients: a live ad-tracking system that
              pulls Google Ads spend, leads, and payments into one view, with
              an agent watching campaign health in the background so nothing
              silently breaks.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#6C3FF5]/10 flex items-center justify-center flex-shrink-0">
                    <Check size={13} strokeWidth={3} className="text-[#6C3FF5]" />
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/60">
              <Image
                src="/dashboard/overview.png"
                alt="AI ad-tracking dashboard overview: page views, leads, revenue, ROAS"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
              <Image
                src="/dashboard/leads.png"
                alt="AI ad-tracking dashboard leads table"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
