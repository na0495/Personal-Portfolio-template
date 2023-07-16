import { Suspense, useRef } from "react";
// Mantine
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// three js
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Avatar } from "src/assets/3DAvatar";

// ----------------------------------------------------------

type BoxProps = {
  position: [number, number, number];
  color: string;
};

function Box({ position, color }: BoxProps) {
  const ref: any = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={7} radius={0.7} />
      </EffectComposer>
    </mesh>
  );
}

export default function HeroCanvas() {
  const matches = useMediaQuery("(min-width: 650px)");
  const theme = useMantineTheme();
  const color =
    theme.colorScheme === "dark"
      ? theme.colors.yellow[5]
      : theme.colors.yellow[7];
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        height: matches ? "50vh" : 225,
      }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={<Box position={[0, 0, 0]} color={color} />}>
        <Avatar position={[0.025, -0.9, 0]} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={7} radius={0.7} />
        </EffectComposer>
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
