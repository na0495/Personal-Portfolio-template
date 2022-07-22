// components
import Path from "../components/Path";
import Page from "../components/Page";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";

// -------------------------------------------------

export default function PathPage() {
  return (
    <Page title="Path" isFirst={true} withBackground={false}>
      <ParticlesWrapper />
      <Path />
    </Page>
  );
}
