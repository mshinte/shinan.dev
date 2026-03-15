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
        <circle cx="120" cy="78" r="42" fill="#ffffff" stroke="#101012" strokeWidth="4" />
        <path
          d="M86 64c10-18 26-26 46-26 12 0 24 3 34 10l-10 18c-8-6-16-8-24-8-12 0-22 6-28 16Z"
          fill="#ff7a59"
        />
        <circle cx="104" cy="82" r="4.5" fill="#101012" />
        <circle cx="136" cy="82" r="4.5" fill="#101012" />
        <path
          d="M102 98c10 10 26 10 36 0"
          stroke="#101012"
          strokeWidth="4"
          strokeLinecap="round"
        />
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
        <path
          d="M94 54c6-20 24-34 46-34 10 0 20 3 28 8"
          fill="none"
          stroke="#3ae3ff"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </motion.svg>
      <div className="mt-6 flex items-center gap-3 text-[0.85rem] uppercase tracking-[0.16em] text-muted">
        <span>Graffiti Dev</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent3" />
        <span>Available</span>
      </div>
    </motion.div>
  );
}
