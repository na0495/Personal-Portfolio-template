// components
import Github from "../components/Github";
import Page from "../components/Page";

// -------------------------------------------------

export default function ProjectsPage() {
  return (
    <Page title="Project" isFirst={true} withBackground={true}>
      <Github />
    </Page>
  );
}
