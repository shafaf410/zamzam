"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="tel:+96890900763"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#1A0006]/90 backdrop-blur-md text-[#D4A437] border border-[#D4A437]/30 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#D4A437]/60 hover:text-white transition-colors duration-300 cursor-pointer"
      aria-label="Call Us"
    >
      <Phone size={20} />
    </motion.a>
  );
};

export default WhatsAppButton;
