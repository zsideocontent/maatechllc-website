import { Bot, Code2, LineChart, Target } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agents",
    description:
      "Custom AI agents that qualify leads, handle client communication, manage tasks, and run the busywork behind a real business, wired directly into the tools you already use.",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "Websites, client portals, and internal apps built and shipped fast, not templated, not bloated.",
  },
  {
    icon: Target,
    title: "SEO & Local Growth",
    description:
      "Organic growth, local search, and content that's actually built for the business it's serving, not a generic playbook.",
  },
  {
    icon: LineChart,
    title: "Ad Tracking & Reporting",
    description:
      "Real dashboards for ad spend, leads, and ROAS, so you know exactly what's working without digging through five different tools.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            An end-to-end tech department, not another AI vendor
          </h2>
          <p className="text-slate-500 leading-relaxed">
            We're a problem-solving tech partner first. AI and automation are
            tools we use to get there, not the pitch itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-100 p-8 hover:border-[#6C3FF5]/30 hover:shadow-xl hover:shadow-[#6C3FF5]/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C3FF5] to-[#00D9FF] flex items-center justify-center mb-6">
                <service.icon size={22} strokeWidth={2} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
