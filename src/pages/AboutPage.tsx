// components
import About from "../components/About";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Page from "../components/Page";

// -------------------------------------------------

export default function AboutPage() {
  return (
    <Page title="About me" isFirst={true} withBackground={false}>
      <About />
      <ParticlesWrapper />
    </Page>
  );
}
