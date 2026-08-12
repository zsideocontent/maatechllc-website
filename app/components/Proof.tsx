"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const wins = [
  {
    image: "/proof/cr8-health-seo-scale.png",
    title: "CR8 Health",
    result: "SEO scaled two locations to $40K/month each, and one to $200K/month, tracked through a personalized Google + Meta ads dashboard.",
  },
  {
    image: "/proof/integrative-med-seo.png",
    title: "Integrative Medicine US",
    result: "Ranked #1 on Google, with their entire GoHighLevel system built from the ground up.",
  },
  {
    image: "/proof/cr8-health-crm.png",
    title: "CR8 Health",
    result: "Zero visibility to #1 on Google Maps, then a custom CRM built to track every Google and Facebook ad dollar.",
  },
  {
    image: "/proof/vibrant-health.png",
    title: "Vibrant Health Center",
    result: "SEO plus a complete website, built with GoHighLevel and proper EHR integration.",
  },
  {
    image: "/proof/cr8-ghl-automation.png",
    title: "CR8 Health",
    result: "A complete system for their clinic, from sales to offboarding, built entirely in GoHighLevel.",
  },
  {
    image: "/proof/integrative-med-voice-ai.png",
    title: "Integrative Medicine US",
    result: "A personalized AI voice agent with custom actions, including escalating what it can't handle.",
  },
  {
    image: "/proof/uqab-corporation.png",
    title: "Uqab Corporation",
    result: "Built their entire tech infrastructure, website included.",
  },
  {
    image: "/proof/noxnetwork.png",
    title: "NOXNETWORK",
    result: "End-to-end tech infrastructure, including a dashboard for managing their editors.",
  },
  {
    image: "/proof/maa-taskboard.png",
    title: "MAA Tech (in-house)",
    result: "Our own AI agent layer, handling support tickets automatically.",
  },
];

const INITIAL_COUNT = 4;

export default function Proof() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? wins : wins.slice(0, INITIAL_COUNT);

  return (
    <section id="proof" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C3FF5] mb-3">
            Real Systems, Not Mockups
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 text-balance">
            The kind of results we build
          </h2>
          <p className="text-slate-500 leading-relaxed">
            A few of the systems currently running for clients right now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence initial={false}>
            {visible.map((win) => (
              <motion.div
                key={win.image}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="neo-raised rounded-[1.75rem] p-4 sm:p-5"
              >
                <div className="rounded-xl overflow-hidden mb-4">
                  <Image
                    src={win.image}
                    alt={`${win.title}: ${win.result}`}
                    width={900}
                    height={560}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#6C3FF5] mb-1.5">
                  {win.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{win.result}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {wins.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <motion.button
              onClick={() => setExpanded((v) => !v)}
              whileTap={{ scale: 0.96 }}
              className="neo-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-[#6C3FF5]"
            >
              {expanded ? "Show less" : "Show more"}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
