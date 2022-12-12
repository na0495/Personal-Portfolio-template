import { RingProgress, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Avatar } from "../assets/3DAvatar";

// ----------------------------------------------------------

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <RingProgress
        sections={[{ value: progress, color: "green" }]}
        label={
          <Text color="black" weight={700} align="center" size="xl">
            {progress.toFixed(0)}%
          </Text>
        }
        size={200}
      />
    </Html>
  );
}

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
      <Suspense fallback={<Loader />}>
        <Avatar position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
