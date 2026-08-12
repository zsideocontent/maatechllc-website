"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Code2, MessageCircle, ShieldCheck, UserCheck, Zap } from "lucide-react";

// Coordinate space for the diagram. Node positions and SVG paths below
// are all authored against this box, then scaled to fit via viewBox.
const W = 340;
const H = 470;

const nodes = [
  { key: "in", x: 170, y: 28, icon: MessageCircle, iconClass: "text-emerald-500", label: "Message comes in", sub: "via WhatsApp" },
  { key: "ai", x: 170, y: 104, icon: Bot, iconClass: "text-[#6C3FF5]", label: "AI agent investigates", sub: "Diagnoses the issue" },
  { key: "auto", x: 82, y: 228, icon: Zap, iconClass: "text-[#00B8D9]", label: "Fixed automatically", sub: "Resolved on the spot" },
  { key: "pm1", x: 258, y: 176, icon: UserCheck, iconClass: "text-[#6C3FF5]", label: "PM notified", sub: "Can't auto-resolve" },
  { key: "dev", x: 258, y: 262, icon: Code2, iconClass: "text-[#6C3FF5]", label: "Developer fixes it", sub: "Right specialist assigned" },
  { key: "pm2", x: 258, y: 346, icon: ShieldCheck, iconClass: "text-[#6C3FF5]", label: "PM verifies", sub: "Confirms before you see it" },
  { key: "done", x: 170, y: 432, icon: CheckCircle2, iconClass: "text-emerald-500", label: "Task marked done", sub: "You get an update" },
] as const;

const byKey = Object.fromEntries(nodes.map((n) => [n.key, n]));

const trunk = `M ${byKey.in.x} ${byKey.in.y} L ${byKey.ai.x} ${byKey.ai.y}`;
const pathA = `${trunk} C ${byKey.ai.x - 10} ${byKey.ai.y + 60}, ${byKey.auto.x + 30} ${byKey.auto.y - 55}, ${byKey.auto.x} ${byKey.auto.y} C ${byKey.auto.x - 20} ${byKey.auto.y + 70}, ${byKey.done.x - 60} ${byKey.done.y - 60}, ${byKey.done.x} ${byKey.done.y}`;
const pathB = `${trunk} C ${byKey.ai.x + 10} ${byKey.ai.y + 40}, ${byKey.pm1.x - 30} ${byKey.pm1.y - 40}, ${byKey.pm1.x} ${byKey.pm1.y} L ${byKey.dev.x} ${byKey.dev.y} L ${byKey.pm2.x} ${byKey.pm2.y} C ${byKey.pm2.x} ${byKey.pm2.y + 50}, ${byKey.done.x + 60} ${byKey.done.y - 40}, ${byKey.done.x} ${byKey.done.y}`;

function NodeBadge({ node, delay }: { node: (typeof nodes)[number]; delay: number }) {
  const Icon = node.icon;
  const align = node.x < W / 2 - 20 ? "items-end text-right" : node.x > W / 2 + 20 ? "items-start text-left" : "items-center text-center";
  return (
    <motion.div
      className={`absolute flex flex-col ${align}`}
      style={{ left: `${(node.x / W) * 100}%`, top: `${(node.y / H) * 100}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
    >
      <div className="neo-raised-sm w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--neo-surface)] mb-1.5">
        <Icon size={17} strokeWidth={2.25} className={node.iconClass} />
      </div>
      <p className="text-[11.5px] font-bold text-slate-800 leading-tight whitespace-nowrap">{node.label}</p>
      <p className="text-[10px] text-slate-400 leading-tight whitespace-nowrap">{node.sub}</p>
    </motion.div>
  );
}

export default function HeroFlow() {
  return (
    <div className="neo-raised rounded-[2rem] p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
        What actually happens
      </p>
      <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          <path d={pathA} stroke="#C7CAD9" strokeWidth={2} strokeLinecap="round" />
          <path d={pathB} stroke="#C7CAD9" strokeWidth={2} strokeLinecap="round" />
          <motion.circle
            r={4}
            fill="#00B8D9"
            style={{ offsetPath: `path('${pathA}')`, offsetRotate: "0deg" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
          />
          <motion.circle
            r={4}
            fill="#6C3FF5"
            style={{ offsetPath: `path('${pathB}')`, offsetRotate: "0deg" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6, delay: 0.5 }}
          />
        </svg>

        {nodes.map((node, i) => (
          <NodeBadge key={node.key} node={node} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
