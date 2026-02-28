"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Typography from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";

interface HeroSectionProps {
  visible?: boolean;
}

// Video sources with poster for faster LCP
const VIDEO_SRC = "/hero_video.mp4" 
// "https://videos.pexels.com/video-files/8089117/8089117-uhd_2732_1440_25fps.mp4";
const POSTER_SRC = "https://images.pexels.com/photos/8089117/pexels-photo-8089117.jpeg?auto=compress&cs=tinysrgb&w=1920";

export default function HeroSection({ visible = true }: HeroSectionProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="h-screen min-h-[600px] relative overflow-hidden bg-black flex flex-col justify-between">
      {/* ── Background video with poster for faster LCP ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={POSTER_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src={VIDEO_SRC}
          type="video/mp4"
        />
      </video>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/90 via-black/45 to-black/15" />

      {/* ── Top ticker ── */}
      <motion.div
        className="relative z-[2] px-site py-3 flex justify-between items-center mt-14 border-b border-white/[0.12]"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-white/55">
          Telescopic Camera Cranes — India
        </p>
        <p className="font-sans text-[0.6rem] tracking-[0.20em] text-white/45 uppercase">
          IST &nbsp;&#9632;&nbsp; {time}
        </p>
      </motion.div>

      {/* ── Center sub-headline + CTAs ── */}
      <motion.div
        className="relative z-[2] px-site"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.55 }}
      >
        <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-white/55 font-light max-w-[32rem] mb-7">
          the nano-precision telescopic camera system
          <br className="hidden md:block" />
          engineered in India for the global stage.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" onClick={() => scrollTo("products")}>
            Explore Products
          </Button>
          {/* <Button variant="ghost" onClick={() => scrollTo("contact")}>
            Request Spec Sheet
          </Button> */}
        </div>
      </motion.div>

      {/* ── Bottom: big title + scroll tag ── */}
      <div className="relative z-[2]">
        {/* Divider line */}
        <motion.div
          className="h-px bg-white/[0.12] mx-site"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: visible ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        />

        <motion.div
          className="px-site pb-10 flex justify-between items-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/*
           * VIDEO CUTOUT MASK — isolation:isolate new stacking context.
           * Typography with mix-blend-mode punches through backing div
           * revealing the video beneath the letterforms.
           */}
          <div className="relative [isolation:isolate] inline-block">
            <Typography
              variant="display-hero"
              as="h1"
              className="relative z-[1] text-white drop-shadow-xl"
            >
              MOTION.
              <br />
              REDEFINED.
            </Typography>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-end gap-3 pb-2">
            <span className="font-sans text-[0.55rem] tracking-[0.20em] uppercase text-accent">
              RKC®
            </span>
            <span className="font-sans text-[0.52rem] tracking-[0.25em] uppercase text-white/35 [writing-mode:vertical-rl] rotate-180">
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
