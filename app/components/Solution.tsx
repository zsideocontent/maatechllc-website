"use client";

import { motion } from "framer-motion";

const flow = [
  "You send one message",
  "MAA Tech PM receives it",
  "AI diagnosis + business context applied",
  "Right developer/specialist assigned",
  "QA review",
  "Completed",
];

export default function Solution() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            The MAA Tech Way
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            One message. One team. Done.
          </h2>
          <p className="text-slate-500 leading-relaxed">
            You stop being the one who has to find, brief, and manage
            whoever fixes it. You just tell MAA Tech.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="neo-raised rounded-[2rem] p-6 sm:p-10 max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            <div className="hidden lg:block absolute top-6 left-[8.3%] right-[8.3%] h-px">
              <svg width="100%" height="2" className="overflow-visible">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#C7CAD9" strokeWidth={1.5} strokeDasharray="1 7" strokeLinecap="round" />
              </svg>
            </div>
            {flow.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.35, ease: "easeOut" }}
                className="relative flex sm:flex-col items-center gap-4 sm:gap-3 sm:text-center"
              >
                <div className="neo-pressed flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-[#6C3FF5] bg-[var(--neo-surface)]">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-slate-700 leading-snug">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
