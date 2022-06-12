// components
import Github from "../components/Github";
import Page from "../components/Page";

// -------------------------------------------------

export default function ProjectsPage() {
  return (
    <Page isFirst={true} withBackground={true}>
      <Github />
    </Page>
  );
}
