// components
import { Contact } from "src/components/Contact";
import Page from "src/components/Page";

// -------------------------------------------------

export default function LandingPage() {
  return (
    <Page title="Contact me" isFirst={true} withBackground={false}>
      <Contact />
    </Page>
  );
}
