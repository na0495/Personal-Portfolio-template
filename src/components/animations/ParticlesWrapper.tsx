import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container } from "tsparticles-engine";

// make reusable component for particles

type ParticlesWrapperProps = {
  children: any;
  sx?: React.CSSProperties;
};

const ParticlesWrapper = ({
  children,
  sx,
  ...others
}: ParticlesWrapperProps) => {

  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(main);
  };

  const particlesLoaded = (container: Container) => {
      
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={children}
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          color: {
            value: "#9e9e9e",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#bdbdbd",
            },
          },
          opacity: {
            value: 0.45,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 50,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "left",
            random: true,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />

  );
};

export default ParticlesWrapper;
