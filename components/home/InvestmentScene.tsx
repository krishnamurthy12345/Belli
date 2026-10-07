"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
  Sphere,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.x += delta * 0.05;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.35}
      floatIntensity={0.8}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.45, 64, 64]} />

        <meshStandardMaterial
          color="#123F31"
          metalness={0.75}
          roughness={0.22}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({
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
      <torusGeometry args={[radius, 0.018, 16, 160]} />

      <meshStandardMaterial
        color="#D4AF37"
        metalness={0.9}
        roughness={0.18}
        emissive="#5A4610"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function FloatingPoint({
  position,
  scale = 0.08,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1.5}
    >
      <mesh position={position}>
        <sphereGeometry args={[scale, 24, 24]} />

        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
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

      <CoreSphere />

      <OrbitRing
        radius={2}
        rotation={[Math.PI / 2.4, 0.25, 0]}
        speed={0.35}
      />

      <OrbitRing
        radius={2.35}
        rotation={[0.7, Math.PI / 3, 0]}
        speed={-0.25}
      />

      <OrbitRing
        radius={2.7}
        rotation={[1.4, 0.4, Math.PI / 5]}
        speed={0.18}
      />

      <FloatingPoint position={[2.1, 0.7, 0.4]} />

      <FloatingPoint
        position={[-2, 0.8, 0.2]}
        scale={0.06}
      />

      <FloatingPoint
        position={[0.4, 2.1, 0.3]}
        scale={0.07}
      />

      <FloatingPoint
        position={[-0.8, -1.9, 0.5]}
        scale={0.055}
      />

      <Sparkles
        count={90}
        scale={7}
        size={2}
        speed={0.3}
        color="#D4AF37"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export default function InvestmentScene() {
  return (
    <div className="h-[480px] w-full sm:h-[560px]">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}