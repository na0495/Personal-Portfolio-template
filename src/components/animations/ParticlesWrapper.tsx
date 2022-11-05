import { useMantineTheme } from "@mantine/core";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

// ----------------------------------------------------------

type ParticlesWrapperProps = {
  sx?: React.CSSProperties;
};

const ParticlesWrapper = ({ sx, ...others }: ParticlesWrapperProps) => {
  const theme = useMantineTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  const opt: any = {
    smooth: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 15,
        },
      },
    },
    particles: {
      move: {
        direction: "none",
        distance: 5,
        enable: true,
        outModes: "none",
        speed: 1,
      },
      number: {
        value: 300,
      },
      shape: {
        type: ["circle", "square", "triangle", "polygon"],
      },
      size: {
        value: {
          min: 3,
          max: 6,
        },
      },
      color: {
        value:
          theme.colorScheme === "dark"
            ? [
                theme.colors.gray[5],
                theme.colors.gray[6],
                theme.colors.gray[7],
                theme.colors.gray[8],
                theme.colors.gray[9],
              ]
            : [
                theme.colors.white[1],
                theme.colors.white[2],
                theme.colors.white[3],
                theme.colors.white[4],
                theme.colors.white[5],
              ],
      },
    },
    backgroundMode: {
      enable: true,
      zIndex: -1,
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={opt}
    />
  );
};

export default ParticlesWrapper;
