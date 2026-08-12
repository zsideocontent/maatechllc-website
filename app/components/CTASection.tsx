import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <div className="neo-raised rounded-[2.5rem] px-10 py-16 sm:px-16 sm:py-20 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-4">
              Stop managing freelancers
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 text-balance">
              Start managing your business
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-9 leading-relaxed">
              15 minutes. We'll look at your current setup, your recurring
              technical problems, and whether we're the right fit, before
              anything is decided.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6C3FF5] px-9 py-4 text-sm font-bold text-white hover:bg-[#5a32d4] transition-colors"
            >
              Book Your Tech Freedom Call &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
