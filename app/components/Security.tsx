import { Eye, KeyRound, ShieldCheck, UserCheck } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  {
    icon: KeyRound,
    title: "Approved systems only",
    description: "The AI agent only investigates and acts within systems you've explicitly approved, nothing more.",
  },
  {
    icon: UserCheck,
    title: "Human oversight, always",
    description: "Anything requiring judgment or access outside approved scope goes to a real developer, reviewed by QA.",
  },
  {
    icon: Eye,
    title: "Full visibility",
    description: "Every request, every action taken, and every fix is logged and visible to you, not a black box.",
  },
  {
    icon: ShieldCheck,
    title: "You control access",
    description: "Credentials and access are granted deliberately, one system at a time, and can be revoked anytime.",
  },
];

export default function Security() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Security
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            Automation with a human still in the loop
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="neo-raised-sm rounded-2xl p-6 flex items-start gap-4 h-full">
                <div className="neo-pressed flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center">
                  <point.icon size={18} strokeWidth={2} className="text-[#6C3FF5]" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">{point.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
