"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AvatarMascot() {
  const [hovered, setHovered] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const popBubble = () => {
      setShowBubble(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => setShowBubble(false), 2000);
    };

    popBubble();
    const intervalId = setInterval(popBubble, 10000);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <motion.div
      className="group relative grid place-items-center rounded-[28px] bg-[linear-gradient(135deg,#ffffff,rgba(58,227,255,0.15))] p-10 shadow-soft"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <AnimatePresence>
        {showBubble && (
          <motion.div
            className="absolute -right-4 top-6 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-md"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            Hi!
          </motion.div>
        )}
      </AnimatePresence>
      <motion.svg
        className="h-64 w-64"
        viewBox="0 0 240 260"
        role="img"
        aria-label="Cartoon developer avatar waving"
      >
        <defs>
          <linearGradient id="hoodieGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#101012" />
            <stop offset="100%" stopColor="#2d2f36" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe7d6" />
            <stop offset="100%" stopColor="#f3c9b3" />
          </linearGradient>
        </defs>
        <rect x="36" y="12" width="168" height="236" rx="32" fill="#f7f4ef" />
        <path
          d="M62 172c10-36 44-60 78-60s68 24 78 60v40H62v-40Z"
          fill="url(#hoodieGradient)"
          stroke="#101012"
          strokeWidth="4"
        />
        <path
          d="M78 136c10-16 26-26 42-26s32 10 42 26"
          fill="#ff7a59"
          stroke="#101012"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="120" cy="86" r="44" fill="url(#skinGradient)" stroke="#101012" strokeWidth="4" />
        <ellipse cx="76" cy="88" rx="7" ry="10" fill="url(#skinGradient)" stroke="#101012" strokeWidth="3" />
        <ellipse cx="164" cy="88" rx="7" ry="10" fill="url(#skinGradient)" stroke="#101012" strokeWidth="3" />
        <path
          d="M78 76c4-24 22-38 42-38s38 14 42 38c-8 6-20 10-42 10s-34-4-42-10Z"
          fill="#2b2b2f"
        />
        <rect x="84" y="50" width="72" height="24" rx="12" fill="#2b2b2f" />
        <path d="M92 72h56" stroke="#1f1f22" strokeWidth="3" strokeLinecap="round" />
        <path d="M96 80h48" stroke="#1f1f22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M98 82h16" stroke="#101012" strokeWidth="4" strokeLinecap="round" />
        <path d="M126 82h16" stroke="#101012" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="104" cy="92" rx="9" ry="6" fill="#ffffff" />
        <ellipse cx="138" cy="92" rx="9" ry="6" fill="#ffffff" />
        <circle cx="104" cy="92" r="3.5" fill="#101012" />
        <circle cx="138" cy="92" r="3.5" fill="#101012" />
        <circle cx="102.5" cy="90.5" r="1.2" fill="#ffffff" />
        <circle cx="136.5" cy="90.5" r="1.2" fill="#ffffff" />
        <path d="M120 92c-2 6-2 10 0 16" stroke="#101012" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M108 114c6 6 18 6 24 0"
          stroke="#101012"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M100 112c4 6 10 8 20 8s16-2 20-8" stroke="#ff7a59" strokeWidth="3" strokeLinecap="round" />
        <motion.g
          style={{ transformOrigin: "85% 20%", transformBox: "fill-box" }}
          animate={
            hovered
              ? {
                  rotate: [0, 12, -8, 12, 0]
                }
              : { rotate: 0 }
          }
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            repeat: hovered ? Infinity : 0
          }}
        >
          <path
            d="M168 146c16 6 26 18 30 36"
            fill="none"
            stroke="#101012"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="202" cy="192" r="10" fill="#ffffff" stroke="#101012" strokeWidth="4" />
        </motion.g>
        <path
          d="M70 176c8 10 18 16 30 18"
          fill="none"
          stroke="#101012"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="102" cy="202" r="10" fill="#ffffff" stroke="#101012" strokeWidth="4" />
        <path d="M90 124h60" stroke="#101012" strokeWidth="4" strokeLinecap="round" />
      </motion.svg>
      <div className="mt-6 flex items-center gap-3 text-[0.85rem] uppercase tracking-[0.16em] text-muted">
        <span>Graffiti Dev</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent3" />
        <span>Available</span>
      </div>
    </motion.div>
  );
}
