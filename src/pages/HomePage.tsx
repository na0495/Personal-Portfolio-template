// components
import ParticlesWrapper from "src/components/animations/ParticlesWrapper";
import Hero from "src/components/Hero";
import Page from "src/components/Page";

// ----------------------------------------

export default function LandingPage() {
  return (
    <Page title="Home" withBackground={false} isFirst={true}>
      <Hero />
      <ParticlesWrapper />
    </Page>
  );
}
