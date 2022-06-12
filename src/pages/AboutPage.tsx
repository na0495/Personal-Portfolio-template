// components
import About from "../components/About";
import Page from "../components/Page";

// -------------------------------------------------

export default function AboutPage() {
  return (
    <Page isFirst={true} withBackground={true}>
      <About />
    </Page>
  );
}
