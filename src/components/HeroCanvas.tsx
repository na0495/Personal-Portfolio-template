import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../assets/3DAvatar";
import { useMediaQuery } from "@mantine/hooks";

// ----------------------------------------------------------

export default function HeroCanvas() {
  const matches = useMediaQuery("(min-width: 650px)");
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        height: matches ? "50vh" : 225,
      }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Avatar position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
