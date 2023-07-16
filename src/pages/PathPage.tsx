// components
import Path from "src/components/Path";
import Page from "src/components/Page";
import ParticlesWrapper from "src/components/animations/ParticlesWrapper";

// -------------------------------------------------

export default function PathPage() {
  return (
    <Page title="Path" isFirst={true} withBackground={false}>
      <Path />
      <ParticlesWrapper />
    </Page>
  );
}
