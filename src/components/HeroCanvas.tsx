import { Suspense, useRef } from "react";
// Mantine
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// three js
import { OrbitControls, Stars, Trail } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Avatar } from "../assets/3DAvatar";

// ----------------------------------------------------------

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref: any = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <Trail
        local
        width={5}
        length={6}
        color={props.color}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}

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
      <meshPhongMaterial color={color} attach="material" />
      {/* <Electron position={[0, 0, 0]} speed={6} color={color} /> */}
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
