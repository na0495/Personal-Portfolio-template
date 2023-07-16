// components
import Github from "src/components/Github";
import CustomHelmet from "src/components/CustomHelmet";
import Project from "src/components/Project";
import Section from "src/components/Section";

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
    </>
  );
}
