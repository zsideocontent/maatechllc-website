"use client";

import { motion } from "framer-motion";
import { Clock, KeyRound, RotateCcw, Search } from "lucide-react";

const painPoints = [
  {
    icon: Search,
    title: "The scramble",
    body: "Finding, vetting, and re-explaining your business to a new freelancer, every single time.",
  },
  {
    icon: Clock,
    title: "The wait",
    body: "A five-minute fix turns into a one or two day business interruption.",
  },
  {
    icon: KeyRound,
    title: "The risk",
    body: "Handing system access to someone new and hoping nothing breaks worse.",
  },
  {
    icon: RotateCcw,
    title: "The repeat",
    body: "Next time something breaks, you start from zero again.",
  },
];

const problemExamples = [
  "Website breaks",
  "Integration fails",
  "Automation stops working",
  "API breaks",
  "CRM issue",
  "New feature needed",
];

const cardOffsets = [
  { rotate: -3, x: 0 },
  { rotate: 2, x: 18 },
  { rotate: -2, x: 4 },
  { rotate: 3, x: 22 },
];

export default function Problem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-16"
          style={{ background: "linear-gradient(155deg, #241A4D 0%, #1a1338 65%, #150f2b 100%)" }}
        >
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #00D9FF 0%, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-16 w-72 h-72 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #6C3FF5 0%, transparent 70%)" }}
          />

          <div className="relative grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-white/10 rounded-full px-3.5 py-1.5 mb-5">
                The Problem
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 text-balance leading-tight">
                Something breaks. Then the real problem starts.
              </h2>
              <p className="text-[#C9C3E8] leading-relaxed mb-8 max-w-md">
                Not because the fix is hard, but because of everything that
                happens before someone even starts on it.
              </p>
              <div className="flex flex-wrap gap-2">
                {problemExamples.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-semibold text-[#C9C3E8] bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col gap-4 max-w-sm mx-auto lg:mx-0 lg:ml-auto w-full">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: cardOffsets[i].rotate }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                  style={{ marginLeft: cardOffsets[i].x }}
                  className="w-[88%] self-end"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="bg-white rounded-2xl px-5 py-4 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)] flex items-start gap-3.5"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#F1F0F6] flex items-center justify-center">
                      <point.icon size={16} strokeWidth={2.25} className="text-[#6C3FF5]" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm mb-0.5">{point.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{point.body}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-lg font-bold text-slate-800 max-w-xl mx-auto text-balance mt-12">
          Recognize this? That&apos;s exactly what MAA Tech removes.
        </p>
      </div>
    </section>
  );
}
