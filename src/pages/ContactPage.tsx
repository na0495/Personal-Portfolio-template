// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import { Contact } from "../components/Contact";
import Page from "../components/Page";

// -------------------------------------------------

export default function LandingPage() {
  return (
    <Page title="Contact me" isFirst={true} withBackground={false}>
      <ParticlesWrapper />
      <Contact />
    </Page>
  );
}
