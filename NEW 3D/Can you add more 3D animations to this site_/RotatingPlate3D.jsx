import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Cylinder, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Rotating plate component
const Plate = () => {
  const plateRef = useRef();
  const rimRef = useRef();

  useFrame(() => {
    if (plateRef.current) {
      plateRef.current.rotation.z += 0.003;
    }
    if (rimRef.current) {
      rimRef.current.rotation.z -= 0.002;
    }
  });

  return (
    <group>
      {/* Main plate */}
      <mesh ref={plateRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[3, 3, 0.3, 64]} />
        <meshStandardMaterial
          color="#D4A574"
          metalness={0.8}
          roughness={0.2}
          emissive="#8B6F47"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Decorative rim */}
      <mesh ref={rimRef} position={[0, 0.2, 0]}>
        <torusGeometry args={[3.1, 0.15, 32, 100]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FFA500"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Inner pattern rings */}
      {[1, 1.5, 2, 2.5].map((radius, idx) => (
        <mesh key={idx} position={[0, 0.15, 0]}>
          <torusGeometry args={[radius, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={`hsl(${30 + idx * 10}, 70%, 50%)`}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff6b00" />
      <spotLight position={[0, 10, 0]} angle={0.5} intensity={0.8} />
    </group>
  );
};

export default function RotatingPlate3D() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
      <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
        <Plate />
        <OrbitControls autoRotate={false} />
      </Canvas>
    </div>
  );
}
