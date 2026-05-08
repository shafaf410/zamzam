"use client";

import { motion } from "framer-motion";

const SectionDivider = ({ type = "wave", color = "gold", className = "" }) => {
  const isWave = type === "wave";
  
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      {isWave ? (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            initial={{ d: "M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" }}
            animate={{ 
              d: [
                "M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z",
                "M0 120L1440 120L1440 20C1440 20 1140 0 720 0C300 0 0 20 0 20L0 120Z",
                "M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z"
              ] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill={color === "gold" ? "rgba(212, 175, 55, 0.05)" : "rgba(90, 15, 28, 0.05)"}
          />
        </svg>
      ) : (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent my-20" />
      )}
      
      {/* Decorative center element */}
      <motion.div 
        initial={{ scale: 0, rotate: 45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gold/40 bg-black-pure z-10"
      />
    </div>
  );
};

export default SectionDivider;
