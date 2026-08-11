import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | MAA Tech Agency",
  description: "Real MAA Tech Agency results: problem, intervention, and measurable outcome.",
};

const stats = [
  { label: "Revenue (30d)", value: "$1,955" },
  { label: "Ad Spend", value: "$40" },
  { label: "ROAS", value: "48.9x" },
  { label: "Cost / Lead", value: "$13.33" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-14 text-balance">
            CR8 Health — Ad Tracking &amp; ROAS Visibility
          </h1>

          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            <div className="neo-raised-sm rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Problem</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multi-location Google Ads spend, leads, and payments lived in
                separate places. No unified way to see what was actually
                converting, or catch a disapproved ad before it cost a day
                of wasted spend.
              </p>
            </div>
            <div className="neo-raised-sm rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Intervention</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Built a live ad-tracking dashboard: Google Ads spend synced
                daily, every call/form lead logged automatically, campaign
                health checks running in the background.
              </p>
            </div>
            <div className="neo-raised-sm rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Result</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Real-time visibility into what's working, by location, with
                zero manual spreadsheet work required.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="neo-pressed rounded-2xl p-6 text-center">
                <p className="text-2xl font-extrabold text-[#6C3FF5] mb-1">{s.value}</p>
                <p className="text-xs text-slate-500 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="neo-raised rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-2xl overflow-hidden mb-4">
              <Image
                src="/dashboard/overview.png"
                alt="CR8 Health ad-tracking dashboard overview"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/dashboard/leads.png"
                alt="CR8 Health ad-tracking dashboard leads table"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
