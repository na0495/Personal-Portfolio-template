import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../assets/3DAvatar";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        height: "50vh",
      }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />
      <Suspense 
        fallback={null}
      >
        <Avatar position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
