import Image from "next/image";
import { ShieldCheck, Zap } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 text-balance">
            An internal knowledge layer, not a black box
          </h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            MAA Tech builds an internal technical knowledge layer around your
            business, so our team already understands your systems before an
            issue even comes in. That's what makes requests fast, not magic.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            The AI agent can investigate approved systems, diagnose issues,
            and resolve certain problems automatically. When human
            intervention is required, it creates a structured task for our
            developer, it doesn't guess, and it doesn't touch anything
            outside what's been approved.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="neo-raised-sm rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="neo-pressed w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={15} className="text-[#6C3FF5]" />
                </div>
                <p className="font-bold text-slate-800 text-sm">Handled automatically</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Approved, well-understood issues get diagnosed and resolved
                directly, no waiting on a human first.
              </p>
            </div>

            <div className="neo-raised-sm rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="neo-pressed w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={15} className="text-[#6C3FF5]" />
                </div>
                <p className="font-bold text-slate-800 text-sm">Escalated to a developer</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Anything needing judgment gets a structured task and a real
                person, reviewed by QA before you see it.
              </p>
            </div>
          </div>
        </div>

        <div className="neo-raised rounded-[2rem] p-6">
          <Image
            src="/graphics/knowledge-hub.png"
            alt="A central knowledge hub connected to a business's website, CRM, automations, infrastructure, SEO, and payments systems"
            width={800}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
