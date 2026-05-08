"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/96800000000"
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] border-2 border-white/20 cursor-pointer overflow-visible"
    >
      <MessageCircle size={32} fill="white" />
      
      {/* Premium Gold Ring */}
      <div className="absolute -inset-1 border border-gold/40 rounded-full animate-pulse" />
      
      {/* Refined Ripple Effect */}
      <motion.div
        animate={{ scale: [1, 2], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
