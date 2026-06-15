"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

// ─── Floating golden particles ───────────────────────────────────────────────
const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  duration: Math.random() * 10 + 6,
  delay: Math.random() * 5,
  driftX: (Math.random() - 0.5) * 60,
  driftY: (Math.random() - 0.5) * 60,
}));

// ─── Animation variants ──────────────────────────────────────────────────────
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
} as const;

const wordReveal = {
  hidden: { opacity: 0, y: 50, rotateX: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 90,
      mass: 0.7,
    },
  },
} as const;

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// ─── Component ───────────────────────────────────────────────────────────────
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  const headingWords = ["Nature's", "Purest"];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center overflow-hidden -mt-[120px] pt-[120px]"
      style={{ minHeight: "calc(100vh + 120px)" }}
    >
      {/* ─── Background Video Layer ──────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: bgScale }}
          >
            {/* Looping background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/honey-bg.png"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/honey-bg-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Floating Golden Particles ────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: "#D4AF37",
              boxShadow: "0 0 8px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.15)",
            }}
            animate={{
              x: [0, p.driftX * 0.5, p.driftX, p.driftX * 0.5, 0],
              y: [0, p.driftY * 0.5, p.driftY, p.driftY * 0.5, 0],
              opacity: [0.15, 0.6, 0.8, 0.6, 0.15],
              scale: [1, 1.6, 1.8, 1.6, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ─── Content ──────────────────────────────────────────────────────── */}
      <motion.div
        className="container relative z-10 mx-auto px-4 text-center -translate-y-[60px] md:-translate-y-[80px]"
        style={{ opacity: contentOpacity }}
        variants={containerStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="relative inline-flex p-[1px] rounded-full mb-6 overflow-hidden bg-gradient-to-r from-[#3a2a05] via-[#5a3e0a] to-[#3a2a05]"
          variants={wordReveal}
        >
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <span className="absolute top-0 left-[-60%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm animate-[shine_4s_linear_infinite]" />
          </span>
          <div className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-50 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-[#F5C542]" />
            </div>
            <Sparkles className="w-4 h-4 text-[#F5C542]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/90">
              100% Pure & Organic
            </span>
          </div>
        </motion.div>

        {/* Heading - Word-by-word reveal */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2"
          variants={containerStagger}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground"
              variants={wordReveal}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* "Essence" with gold gradient */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          variants={wordReveal}
        >
          <span className="text-gradient-gold italic">Essence</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed px-2"
          variants={fadeSlideUp}
        >
          Discover our premium collection of raw honey, pure shilajit, and natural wellness products sourced directly from the earth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          variants={containerStagger}
        >
          <motion.div
            className="button-wrapper relative inline-block p-[2px] rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#C99C33,_#C99C3330,_#C99C33)] w-full sm:w-auto"
            variants={fadeSlideUp}
          >
            <Button
              asChild
              size="lg"
              className="relative z-10 rounded-full px-10 h-14 text-lg bg-black text-white shadow-[0_0_30px_rgba(201,156,51,0.2)] hover:shadow-[0_0_40px_rgba(201,156,51,0.4)] w-full sm:w-auto"
            >
              <Link href="/products">Shop Collection</Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeSlideUp}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 h-14 text-lg glass-panel hover:bg-primary/10 w-full sm:w-auto"
            >
              <Link href="#about">Our Story</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
