"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.05;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.3}
      floatIntensity={0.8}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.3, 48, 48]} />

        <meshStandardMaterial
          color="#123F31"
          metalness={0.8}
          roughness={0.2}
          emissive="#0B3D2E"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

function Ring({
  radius,
  rotation,
  speed,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.z += delta * speed;
  });

  return (
    <mesh
      ref={ringRef}
      rotation={rotation}
    >
      <torusGeometry
        args={[radius, 0.018, 16, 120]}
      />

      <meshStandardMaterial
        color="#D4AF37"
        metalness={0.9}
        roughness={0.15}
        emissive="#D4AF37"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.1} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={3}
        color="#FFF4C7"
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={2}
        color="#1B5E48"
      />

      <Core />

      <Ring
        radius={1.8}
        rotation={[Math.PI / 2.3, 0.2, 0]}
        speed={0.3}
      />

      <Ring
        radius={2.2}
        rotation={[0.7, Math.PI / 3, 0]}
        speed={-0.22}
      />

      <Ring
        radius={2.6}
        rotation={[1.3, 0.4, Math.PI / 5]}
        speed={0.15}
      />

      <Sparkles
        count={80}
        scale={6}
        size={2}
        speed={0.3}
        color="#D4AF37"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </>
  );
}

export default function ContactScene() {
  return (
    <div className="h-[420px] w-full sm:h-[500px]">
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 43,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}