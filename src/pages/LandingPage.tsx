import { useState } from "react";
// Mantine
import { ActionIcon, createStyles } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
// components
import { Hero } from "../components/Hero";
import About from "../components/About";
import Page from "../components/Page";
import Skills from "../components/Skills";
import Path from "../components/Path";
import Github from "../components/Github";
// icons
import { ArrowUp } from "tabler-icons-react";

// -------------------------------------------------

const useStyles = createStyles((theme) => ({
  sticky: {
    position: "sticky",
    zIndex: 9999,
    // // fix the content on the bottom right corner of the page when the page is scrolled
    bottom: "0",
    right: "0",
    // make the content visible when the page is scrolled
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 75,
    marginRight: 75,
  },
}));

export default function LandingPage() {
  const [currentOffset, setCurrentOffset] = useState(0);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { classes } = useStyles();

  const handleParallaxNavigationUp = () => {
    scrollIntoView({ alignment: "center" });
  };

  return (
    <>
      <div ref={targetRef} />
      <Page withBackground={false} isFirst={true}>
        <Hero />
      </Page>
      <Page withBackground={true}>
        <About />
      </Page>
      <Page withBackground={false}>
        <Skills />
      </Page>
      <Page withBackground={true} height={"200hv"}>
        <Github />
      </Page>
      {/* <Page withBackground={true} height={"200hv"}>
        <Project />
      </Page> */}
      <Page withBackground={true}>
        <Path />
      </Page>
      <div className={classes.sticky}>
        <ActionIcon
          variant="filled"
          color="gray"
          radius={50}
          onClick={handleParallaxNavigationUp}
          // disabled={currentOffset >= 2}
          size={45}
          mr={25}
        >
          <ArrowUp />
        </ActionIcon>
      </div>
    </>
  );
}
