// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Github from "../components/Github";
import CustomHelmet from "../components/CustomHelmet";
import Project from "../components/Project";
import Section from "../components/Section";

// -------------------------------------------------

export default function ProjectsPage() {
  return (
    <>
      <CustomHelmet title="Projects" />
      <Section>
        <Github />
      </Section>
      <Section>
        <Project />
      </Section>
      <ParticlesWrapper />
    </>
  );
}
