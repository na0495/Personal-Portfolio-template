import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraShake, OrbitControls } from "@react-three/drei";
import { Avatar } from "../assets/3DAvatar";
import { Suspense } from "react";
import WaitLoader from "./animations/WaitLoader";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        height: "50vh",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Avatar position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
