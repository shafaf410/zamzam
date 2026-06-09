"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof typeof motion | string;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: React.RefObject<HTMLElement | null>;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  className,
  style,
  as = "div",
  animationNum = 0,
  customVariants,
  timelineRef,
  ...props
}) => {
  // Map standard HTML tags to motion components dynamically
  const MotionComponent = (motion as any)[as] || motion.div;

  // Default animation variants if customVariants is not passed
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: animationNum * 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <MotionComponent
      className={className}
      style={style}
      variants={customVariants || defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={animationNum}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
