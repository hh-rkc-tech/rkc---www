"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = Math.round((1 - Math.pow(1 - current / steps, 2)) * 100);
      setCount(eased);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => onComplete(), 1000);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Brand name */}
          <motion.div
            className="mb-auto pt-12 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans text-base tracking-[0.25em] text-white/40 uppercase">
              RK Cinematics
            </span>
            <span className="text-white/30 text-xs">®</span>
          </motion.div>

          {/* Centre — big RKC + loading label */}
          <div className="flex flex-col items-center gap-6">
            <motion.h1
              className="font-display text-[20vw] leading-none text-white select-none"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.05em" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              RKC
            </motion.h1>
            <motion.p
              className="font-sans text-xs tracking-[0.3em] text-white/30 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading
            </motion.p>
          </div>

          {/* Bottom — progress bar + counter */}
          <div className="mb-10 mt-auto w-full px-8 flex items-end justify-between">
            <div className="flex-1 mr-8">
              <div className="h-px bg-white/10 w-full relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white"
                  style={{ width: `${count}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
            </div>
            <motion.span
              className="font-display text-white text-4xl tabular-nums leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {String(count).padStart(2, "0")}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
