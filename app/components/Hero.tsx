import { Check, Clock, MessageSquare, Wrench } from "lucide-react";

const flowSteps = [
  { icon: MessageSquare, label: "You message us", sub: '"Checkout page is broken"', done: true },
  { icon: Clock, label: "PM + AI diagnose it", sub: "Context already known", done: true },
  { icon: Wrench, label: "Right specialist assigned", sub: "No searching, no explaining", done: true },
  { icon: Check, label: "Fixed & confirmed", sub: "You get an update, not a status page", done: false },
];

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
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors"
            >
              See How It Works &rarr;
            </a>
          </div>
        </div>

        <div className="neo-raised rounded-[2rem] p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            What actually happens
          </p>
          <div className="space-y-3">
            {flowSteps.map((step, i) => (
              <div
                key={step.label}
                className={`flex items-center gap-4 rounded-2xl p-4 ${
                  step.done ? "neo-pressed" : "neo-raised-sm"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                    step.done ? "bg-[#6C3FF5]" : "bg-gradient-to-br from-[#6C3FF5] to-[#00D9FF]"
                  }`}
                >
                  <step.icon size={19} strokeWidth={2.25} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-800">
                    {i + 1}. {step.label}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
