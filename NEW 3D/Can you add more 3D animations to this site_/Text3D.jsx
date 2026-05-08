import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Text component
const Text3DContent = ({ text = 'ZAM ZAM' }) => {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.005;
      textRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
    }
  });

  return (
    <group ref={textRef}>
      <Text
        position={[0, 0, 0]}
        fontSize={2}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-var.woff"
        weight={700}
      >
        {text}
      </Text>

      {/* Glow effect */}
      <pointLight position={[0, 0, 2]} intensity={2} color="#ff6b00" />
      <pointLight position={[0, 0, -2]} intensity={1} color="#FFD700" />
      <ambientLight intensity={0.6} />
    </group>
  );
};

export default function Text3D({ text = 'ZAM ZAM MANDI' }) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-b from-black to-gray-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Text3DContent text={text} />
        <OrbitControls autoRotate autoRotateSpeed={3} />
      </Canvas>
    </div>
  );
}
