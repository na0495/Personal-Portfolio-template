import { RingProgress, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Avatar } from "../assets/3DAvatar";

// ----------------------------------------------------------

type BoxProps = {
  position: [number, number, number];
  color: string;
};


function Box({position, color}: BoxProps) {
  const ref: any = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial color={color} attach="material" />
    </mesh>
  )
}


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
      <Suspense fallback={
        <Box position={[0, 0, 0]} color="red" />
      }>
        <Avatar position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
