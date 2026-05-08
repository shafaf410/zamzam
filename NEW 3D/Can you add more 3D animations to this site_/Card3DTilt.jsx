import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Card3DTilt({ children, className = '' }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shine, setShine] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const rotX = ((y - centerY) / centerY) * 15;
    const rotY = ((x - centerX) / centerX) * -15;

    setRotateX(rotX);
    setRotateY(rotY);
    setShine({ x: x / rect.width, y: y / rect.height });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative ${className}`}
    >
      {/* Main card content */}
      <div
        style={{
          transform: `translateZ(50px)`,
        }}
        className="relative z-10"
      >
        {children}
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background: `radial-gradient(circle at ${shine.x * 100}% ${shine.y * 100}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`,
          opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
        }}
      />

      {/* Back shadow layer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-lg blur-xl -z-10"
        style={{
          transform: `translateZ(-50px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
        }}
      />
    </motion.div>
  );
}
