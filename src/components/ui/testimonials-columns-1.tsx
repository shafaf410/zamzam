"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-[#D4A437]/10 bg-[#5A0013]/10 backdrop-blur-md shadow-2xl max-w-xs w-full text-[#F8F3EA] hover:border-[#D4A437]/30 transition-all duration-500" key={i}>
                  <div className="text-xs sm:text-sm font-light leading-relaxed text-[#D8CFC2] italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border border-[#D4A437]/20 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-marcellus text-[#D4A437] text-xs font-bold tracking-wider">{name}</div>
                      <div className="text-[9px] uppercase tracking-widest text-[#D8CFC2]/60">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
