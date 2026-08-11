import { Check } from "lucide-react";

const tiers = [
  {
    name: "Essential",
    price: "$750",
    period: "/mo",
    description: "For businesses that need a reliable tech partner on call.",
    features: [
      "Dedicated Project Manager",
      "Slack support",
      "Emergency fixes",
      "Monthly strategy call",
      "Limited development capacity",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$1,500",
    period: "/mo",
    description: "For businesses actively building and shipping.",
    features: [
      "Everything in Essential",
      "Higher development capacity",
      "AI automations",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$3,000",
    period: "+/mo",
    description: "For businesses that need a strategic technical partner.",
    features: [
      "Dedicated PM",
      "Highest development capacity",
      "Same-day priority",
      "Strategic CTO guidance",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            One subscription. No freelancer math.
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Specialists (SEO, marketing, design, automation) get added to
            any plan as your business actually needs them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ${tier.featured ? "neo-raised" : "neo-raised-sm"}`}
            >
              {tier.featured && (
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-[#6C3FF5] rounded-full px-3 py-1 mb-4">
                  Most Popular
                </span>
              )}
              <p className="font-bold text-slate-800 text-lg mb-1">{tier.name}</p>
              <p className="text-sm text-slate-500 mb-5">{tier.description}</p>
              <p className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-400 font-semibold">{tier.period}</span>
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={16} strokeWidth={2.5} className="text-[#6C3FF5] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`block text-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                  tier.featured
                    ? "bg-[#6C3FF5] text-white hover:bg-[#5a32d4]"
                    : "neo-btn text-[#6C3FF5]"
                }`}
              >
                Book Your Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
