import { Box } from "@mantine/core";
import na0495Video from "../assets/na0495.mp4";
import BoxWrapper from "./BoxWrapper";

// ----------------------------------------------------

export default function GithubWrapped() {
  return (
    <BoxWrapper>
      <video controls style={{ maxWidth: 750 }}>
        <source src={na0495Video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </BoxWrapper>
  );
}
