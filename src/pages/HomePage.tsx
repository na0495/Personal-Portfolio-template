// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Hero from "../components/Hero";
import Page from "../components/Page";

// ----------------------------------------

export default function LandingPage() {
  return (
    <Page title="Home" withBackground={false} isFirst={true}>
      <ParticlesWrapper />
      <Hero />
    </Page>
  );
}
