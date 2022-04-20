import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesOptions } from "./ParticlesOptions";

// make reusable component for particles

type ParticlesWrapperProps = {
  children: React.ReactNode;
  sx?: React.CSSProperties;
};

const ParticlesWrapper = ({
  children,
  sx,
  ...others
}: ParticlesWrapperProps) => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesOptions}
    >
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </Particles>
  );
};

export default ParticlesWrapper;
