// components
import Path from "src/components/Path";
import Page from "src/components/Page";

// -------------------------------------------------

export default function PathPage() {
  return (
    <Page title="Path" isFirst={true} withBackground={false}>
      <Path />
    </Page>
  );
}
