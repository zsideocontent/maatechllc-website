export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6C3FF5] to-[#4c2ba8] px-10 py-16 sm:px-16 sm:py-20 text-center">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#00D9FF]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#00D9FF]/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 text-balance">
              Let&apos;s figure out what&apos;s actually worth automating
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-9 leading-relaxed">
              30 minutes, no pitch deck. We&apos;ll talk through what's
              actually costing you time, and whether we're the right fit to
              fix it.
            </p>
            <a
              href="mailto:hello@maatechllc.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-sm font-bold text-[#6C3FF5] hover:bg-slate-50 transition-colors"
            >
              Book Your Free Call &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
