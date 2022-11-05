// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Github from "../components/Github";
import Page from "../components/Page";

// -------------------------------------------------

export default function ProjectsPage() {
  return (
    <Page title="Project" isFirst={true} withBackground={false}>
      <ParticlesWrapper />
      <Github />
    </Page>
  );
}
