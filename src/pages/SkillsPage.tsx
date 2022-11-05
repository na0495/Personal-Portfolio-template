// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Page from "../components/Page";
import Skills from "../components/Skills";

// -------------------------------------------------

export default function SkillsPage() {
  return (
    <Page title="Skills" isFirst={true} withBackground={false}>
      <ParticlesWrapper />
      <Skills />
    </Page>
  );
}
