// components
import About from "src/components/About";
import Page from "src/components/Page";

// -------------------------------------------------

export default function AboutPage() {
  return (
    <Page title="About me" isFirst={true} withBackground={false}>
      <About />
    </Page>
  );
}
