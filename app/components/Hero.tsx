const blocks = [
  // [col, row, size, color, delay]
  [0, 5, 1, "#6C3FF5", "0s"], [1, 5, 1, "#00D9FF", "0.05s"], [2, 5, 1, "#6C3FF5", "0.1s"],
  [0, 4, 1, "#00D9FF", "0.15s"], [1, 4, 1, "#6C3FF5", "0.2s"], [2, 4, 1, "#6C3FF5", "0.25s"],
  [0, 3, 1, "#6C3FF5", "0.3s"], [1, 3, 1, "#6C3FF5", "0.35s"], [2, 3, 1, "#00D9FF", "0.4s"],
  [3, 3, 1, "#6C3FF5", "0.45s"],
  [3, 2, 1, "#00D9FF", "0.5s"], [4, 2, 1, "#6C3FF5", "0.55s"],
  [4, 1, 1, "#6C3FF5", "0.6s"], [5, 1, 1, "#00D9FF", "0.65s"],
  [5, 0, 1, "#00D9FF", "0.7s"], [6, 0, 1, "#6C3FF5", "0.75s"],
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-10 lg:pt-28 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6C3FF5]/8 px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#6C3FF5]">
              AI-run agency, since day one
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6 text-balance">
            Your business,{" "}
            <span className="bg-gradient-to-r from-[#6C3FF5] to-[#00D9FF] bg-clip-text text-transparent">
              running on AI
            </span>
            , not on us
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-9">
            MAA Tech Agency builds the AI automations, dashboards, and systems
            that run underneath real businesses, websites, SEO, ad tracking,
            and the agents that handle the busywork in between. We use
            exactly what we sell, on our own agency, every day.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6C3FF5] px-8 py-4 text-sm font-bold text-white hover:bg-[#5a32d4] transition-colors"
            >
              Book a Free 30-Min Call &rarr;
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-8 py-4 text-sm font-bold text-slate-700 hover:border-slate-300 transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>

        <div className="relative h-[420px] lg:h-[480px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#6C3FF5]/5 to-[#00D9FF]/5" />
          <div
            className="relative grid gap-2.5"
            style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gridTemplateRows: "repeat(6, minmax(0, 1fr))" }}
          >
            {blocks.map(([col, row, , color, delay], i) => (
              <div
                key={i}
                className="rounded-lg animate-[float_3s_ease-in-out_infinite]"
                style={{
                  gridColumnStart: (col as number) + 1,
                  gridRowStart: 6 - (row as number),
                  width: "3.2rem",
                  height: "3.2rem",
                  background: color as string,
                  animationDelay: delay as string,
                  boxShadow: `0 10px 30px -8px ${color}66`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
