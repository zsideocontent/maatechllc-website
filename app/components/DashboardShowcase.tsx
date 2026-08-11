import Image from "next/image";

export default function DashboardShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
          Real Systems, Not Mockups
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
          The kind of infrastructure we build
        </h2>
        <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-10">
          A live ad-tracking dashboard built for one of our clients, spend,
          leads, and ROAS in one place, no spreadsheet stitching.
        </p>

        <div className="neo-raised rounded-[2rem] p-4 sm:p-6 max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/dashboard/overview.png"
              alt="Live ad-tracking dashboard: leads, revenue, and ROAS"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>
        <a href="/case-studies" className="inline-block mt-6 text-sm font-bold text-[#6C3FF5] hover:underline">
          See the full case study &rarr;
        </a>
      </div>
    </section>
  );
}
