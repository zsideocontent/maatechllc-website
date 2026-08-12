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
  { key: "dev", x: 258, y: 262, icon: Code2, iconClass: "text-[#6C3FF5]", label: "Developer fixes it", sub: "Right specialist" },
  { key: "pm2", x: 258, y: 346, icon: ShieldCheck, iconClass: "text-[#6C3FF5]", label: "PM verifies", sub: "Confirms it first" },
  { key: "done", x: 170, y: 432, icon: CheckCircle2, iconClass: "text-emerald-500", label: "Task marked done", sub: "You get an update" },
] as const;

const byKey = Object.fromEntries(nodes.map((n) => [n.key, n]));

const trunk = `M ${byKey.in.x} ${byKey.in.y} L ${byKey.ai.x} ${byKey.ai.y}`;
const pathA = `${trunk} C ${byKey.ai.x - 10} ${byKey.ai.y + 60}, ${byKey.auto.x + 30} ${byKey.auto.y - 55}, ${byKey.auto.x} ${byKey.auto.y} C ${byKey.auto.x - 20} ${byKey.auto.y + 70}, ${byKey.done.x - 60} ${byKey.done.y - 60}, ${byKey.done.x} ${byKey.done.y}`;
const pathB = `${trunk} C ${byKey.ai.x + 10} ${byKey.ai.y + 40}, ${byKey.pm1.x - 30} ${byKey.pm1.y - 40}, ${byKey.pm1.x} ${byKey.pm1.y} L ${byKey.dev.x} ${byKey.dev.y} L ${byKey.pm2.x} ${byKey.pm2.y} C ${byKey.pm2.x} ${byKey.pm2.y + 50}, ${byKey.done.x + 60} ${byKey.done.y - 40}, ${byKey.done.x} ${byKey.done.y}`;

// A handful of straight-ish waypoints per branch, used to hop the pulse
// dot along the path with plain cx/cy keyframes (no CSS offset-path,
// which is unreliable on mobile browsers).
const waypointsA = [byKey.in, byKey.ai, byKey.auto, byKey.done];
const waypointsB = [byKey.in, byKey.ai, byKey.pm1, byKey.dev, byKey.pm2, byKey.done];

function NodeBadge({ node, delay }: { node: (typeof nodes)[number]; delay: number }) {
  const Icon = node.icon;
  const isLeft = node.x < W / 2 - 20;
  const isRight = node.x > W / 2 + 20;
  const align = isLeft ? "items-end text-right" : isRight ? "items-start text-left" : "items-center text-center";
  return (
    <motion.div
      className={`absolute flex flex-col ${align}`}
      style={{
        left: `${(node.x / W) * 100}%`,
        top: `${(node.y / H) * 100}%`,
        transform: "translate(-50%, -50%)",
        width: 110,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
    >
      <div className="neo-raised-sm w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-[var(--neo-surface)] mb-1.5 flex-shrink-0">
        <Icon size={16} strokeWidth={2.25} className={node.iconClass} />
      </div>
      <p className="text-[9.5px] sm:text-[11.5px] font-bold text-slate-800 leading-tight">{node.label}</p>
      <p className="text-[8.5px] sm:text-[10px] text-slate-400 leading-tight">{node.sub}</p>
    </motion.div>
  );
}

function TravelingDot({ waypoints, color, duration, delay }: { waypoints: readonly { x: number; y: number }[]; color: string; duration: number; delay: number }) {
  const opacity = waypoints.map((_, i) => (i === 0 || i === waypoints.length - 1 ? 0 : 1));
  return (
    <motion.circle
      r={4}
      fill={color}
      initial={{ cx: waypoints[0].x, cy: waypoints[0].y, opacity: 0 }}
      animate={{
        cx: waypoints.map((w) => w.x),
        cy: waypoints.map((w) => w.y),
        opacity,
      }}
      transition={{ duration, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay }}
    />
  );
}

export default function HeroFlow() {
  return (
    <div className="neo-raised rounded-[2rem] p-5 sm:p-8 overflow-hidden">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
        What actually happens
      </p>
      <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 w-full h-full overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <path d={pathA} stroke="#C7CAD9" strokeWidth={2} strokeLinecap="round" />
          <path d={pathB} stroke="#C7CAD9" strokeWidth={2} strokeLinecap="round" />
          <TravelingDot waypoints={waypointsA} color="#00B8D9" duration={3} delay={0.3} />
          <TravelingDot waypoints={waypointsB} color="#6C3FF5" duration={4} delay={1.2} />
        </svg>

        {nodes.map((node, i) => (
          <NodeBadge key={node.key} node={node} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
