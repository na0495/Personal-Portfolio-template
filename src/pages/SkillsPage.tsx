// components
import Page from "../components/Page";
import Skills from "../components/Skills";

// -------------------------------------------------

export default function SkillsPage() {
  return (
    <Page title="Skills" isFirst={true} withBackground={true}>
      <Skills />
    </Page>
  );
}
