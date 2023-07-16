// components
import About from "src/components/About";
import ParticlesWrapper from "src/components/animations/ParticlesWrapper";
import Page from "src/components/Page";

// -------------------------------------------------

export default function AboutPage() {
  return (
    <Page title="About me" isFirst={true} withBackground={false}>
      <About />
      <ParticlesWrapper />
    </Page>
  );
}
