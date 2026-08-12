"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Palette, Server, Target, TrendingUp } from "lucide-react";

const services = [
  { icon: Code2, title: "Development", description: "Web, apps, and internal tools, built and maintained." },
  { icon: Bot, title: "AI & Automation", description: "Agents and workflows that remove repetitive work." },
  { icon: Server, title: "Infrastructure", description: "Hosting, uptime, and the boring things that must not break." },
  { icon: Target, title: "SEO", description: "Organic growth built for your business, not a template." },
  { icon: TrendingUp, title: "Marketing", description: "Ad tracking and reporting that's actually trustworthy." },
  { icon: Palette, title: "Design", description: "Interfaces and brand work that match how you actually operate." },
];

const waveOffset = ["lg:translate-y-0", "lg:-translate-y-4", "lg:translate-y-3"];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Departments, Not Freelancers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            Everything technical, under one roof
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Core service includes a dedicated PM and dev team. Specialists
            get added as your business actually needs them.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
          <span className="neo-pressed rounded-full px-4 py-1.5 text-xs font-bold text-[#6C3FF5] whitespace-nowrap">
            PM + Dev Core
          </span>
          <svg width="100%" height="2" className="flex-1 overflow-visible">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#C7CAD9" strokeWidth={1.5} strokeDasharray="1 7" strokeLinecap="round" />
          </svg>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`neo-raised-sm rounded-2xl p-6 flex items-start gap-4 transition-shadow ${waveOffset[i % 3]}`}
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
                className="neo-pressed flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              >
                <service.icon size={18} strokeWidth={2} className="text-[#6C3FF5]" />
              </motion.div>
              <div>
                <p className="font-bold text-slate-800 text-sm mb-1">{service.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
