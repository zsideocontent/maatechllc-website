import Reveal from "./Reveal";

const faqs = [
  {
    q: "What does MAA Tech actually do?",
    a: "We act as your outsourced technology department, a dedicated PM and technical team who handle development, maintenance, integrations, and automation, so you don't have to manage it yourself.",
  },
  {
    q: "Who is this for?",
    a: "Growing businesses that depend on technology to operate, and currently rely on freelancers, agencies, or a stretched-thin internal team to keep things running.",
  },
  {
    q: "What problem does it solve?",
    a: "The friction of finding, briefing, and managing a new technical person every single time something breaks or needs building.",
  },
  {
    q: "Why is this better than hiring freelancers?",
    a: "One point of contact who already understands your business and systems, instead of re-explaining everything to someone new each time.",
  },
  {
    q: "How does the service actually work?",
    a: "You send one message. Our PM and AI system diagnose it using existing context on your business, the right specialist is assigned, it's fixed, QA'd, and you get an update.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your systems and how much ongoing work they need. Book a Tech Freedom Call and we'll scope it with you directly, no generic tiers.",
  },
  {
    q: "Why should I trust MAA Tech?",
    a: "Real clients, real results, a clear process, and security practices that keep a human in the loop on anything that matters. Founder-led, not an anonymous agency.",
  },
  {
    q: "What should I do next?",
    a: "Book a free 15-minute Tech Freedom Call. It's a short assessment of your current setup, not a sales pitch.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-balance">
            Everything, in one minute
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={Math.min(i * 0.05, 0.3)}>
              <div className="neo-raised-sm rounded-2xl p-6">
                <p className="font-bold text-slate-800 mb-2">{faq.q}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
