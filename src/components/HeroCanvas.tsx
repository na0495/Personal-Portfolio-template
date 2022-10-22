import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "../assets/3DAvatar";
import { Suspense } from "react";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        height: "100vh",
        zIndex: 1,
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Avatar position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
