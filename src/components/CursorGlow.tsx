"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      animate={{
        x: pos.x - 80,
        y: pos.y - 80,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
    />
  );
}