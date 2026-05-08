"use client";

import { motion } from "framer-motion";

export const CornerFlourish = ({ position = "top-left", color = "gold" }) => {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <div className={`absolute ${positions[position]} w-32 h-32 pointer-events-none opacity-20 z-10`}>
      <svg viewBox="0 0 100 100" fill="none" className={`w-full h-full text-${color}`}>
        <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="currentColor" />
        <path d="M10 10 L40 10 L40 12 L12 12 L12 40 L10 40 Z" fill="currentColor" />
        <circle cx="5" cy="5" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

export const OrnamentalPattern = ({ className = "" }) => (
  <div className={`absolute inset-0 ornamental-pattern pointer-events-none ${className}`} />
);

export const FloatingShape = ({ type = "circle", color = "gold", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.1],
        scale: [1, 1.2, 1],
        y: [0, -20, 0],
        rotate: [0, 90, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className={`absolute w-64 h-64 border border-${color}/10 rounded-full pointer-events-none z-0`}
      style={{
        borderRadius: type === "square" ? "0%" : "50%",
      }}
    />
  );
};
