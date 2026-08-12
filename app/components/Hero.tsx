import HeroFlow from "./HeroFlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-10 lg:pt-24 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="neo-raised-sm inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#6C3FF5]">
              Outsourced Technology Department
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6 text-balance">
            Your Dedicated Tech Team.
            <br />
            <span className="text-[#6C3FF5]">Without the Cost of Hiring One.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-9">
            Stop finding a new freelancer every time something breaks. One
            technology partner who already knows your business, your stack,
            and where everything lives.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="neo-btn inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-[#6C3FF5]"
            >
              Book Your Tech Freedom Call &rarr;
            </a>
          </div>
        </div>

        <HeroFlow />
      </div>
    </section>
  );
}
