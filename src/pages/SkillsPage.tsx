// components
import ParticlesWrapper from "src/components/animations/ParticlesWrapper";
import Page from "src/components/Page";
import Skills from "src/components/Skills";

// -------------------------------------------------

export default function SkillsPage() {
  return (
    <Page title="Skills" isFirst={true} withBackground={false}>
      <Skills />
      <ParticlesWrapper />
    </Page>
  );
}
