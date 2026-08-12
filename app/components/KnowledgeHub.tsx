"use client";

import { motion } from "framer-motion";
import { Brain, CreditCard, Globe, Search, Server, Users, Workflow } from "lucide-react";

const BOX = 260;
const CENTER = BOX / 2;

const satellites = [
  { icon: Globe, label: "Website", angle: -90 },
  { icon: Users, label: "CRM", angle: -30 },
  { icon: Workflow, label: "Automations", angle: 30 },
  { icon: Server, label: "Infra", angle: 90 },
  { icon: Search, label: "SEO", angle: 150 },
  { icon: CreditCard, label: "Payments", angle: 210 },
];

const RADIUS = 108;

function pos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
}

export default function KnowledgeHub() {
  return (
    <div className="relative mx-auto" style={{ width: BOX, height: BOX }}>
      <svg viewBox={`0 0 ${BOX} ${BOX}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
        {satellites.map((s) => {
          const p = pos(s.angle);
          return (
            <line
              key={s.label}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke="#C7CAD9"
              strokeWidth={1.5}
            />
          );
        })}
        {satellites.map((s, i) => {
          const p = pos(s.angle);
          return (
            <motion.circle
              key={s.label}
              r={3}
              fill="#00B8D9"
              cx={CENTER}
              cy={CENTER}
              animate={{ cx: [CENTER, p.x], cy: [CENTER, p.y], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: satellites.length * 0.35,
                delay: i * 0.35,
                ease: "easeOut",
              }}
            />
          );
        })}
      </svg>

      {satellites.map((s, i) => {
        const p = pos(s.angle);
        const Icon = s.icon;
        return (
          <motion.div
            key={s.label}
            className="absolute flex flex-col items-center"
            style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
          >
            <div className="neo-raised-sm w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--neo-surface)]">
              <Icon size={16} strokeWidth={2.25} className="text-[#6C3FF5]" />
            </div>
            <p className="text-[10px] font-semibold text-slate-500 mt-1 whitespace-nowrap">{s.label}</p>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          left: CENTER,
          top: CENTER,
          transform: "translate(-50%, -50%)",
          width: 66,
          height: 66,
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(108,63,245,0.35) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.15, 0.6] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="relative w-full h-full rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #6C3FF5, #00D9FF)" }}
        >
          <Brain size={26} strokeWidth={2} className="text-white" />
        </div>
      </motion.div>
    </div>
  );
}
