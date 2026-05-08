import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// Individual spice particle
const SpiceParticle = ({ position, speed, size, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.015;
      meshRef.current.position.y += Math.sin(Date.now() * 0.001 + position[0]) * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Sphere args={[size, 32, 32]}>
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </Sphere>
    </mesh>
  );
};

// Main floating spices scene
const FloatingSpicesScene = () => {
  const spices = [
    { position: [-3, 2, 0], speed: 2, size: 0.3, color: '#D4A574' }, // Cumin
    { position: [3, 1, -2], speed: 1.5, size: 0.25, color: '#8B4513' }, // Cinnamon
    { position: [0, -1, 2], speed: 2.5, size: 0.35, color: '#CD5C5C' }, // Paprika
    { position: [-2, -2, -1], speed: 1.8, size: 0.28, color: '#FFD700' }, // Turmeric
    { position: [2, 3, 1], speed: 2.2, size: 0.32, color: '#8B0000' }, // Clove
    { position: [1, 0, -3], speed: 1.6, size: 0.26, color: '#A0522D' }, // Nutmeg
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b00" />
      
      {spices.map((spice, idx) => (
        <SpiceParticle key={idx} {...spice} />
      ))}
      
      <OrbitControls autoRotate autoRotateSpeed={2} />
    </>
  );
};

export default function FloatingSpices3D() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <FloatingSpicesScene />
      </Canvas>
    </div>
  );
}
