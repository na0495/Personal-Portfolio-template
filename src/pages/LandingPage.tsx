import { useState } from "react";
// Mantine
import { ActionIcon, createStyles } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
// components
import About from "src/components/About";
import Github from "src/components/Github";
import Hero from "src/components/Hero";
import Section from "src/components/Section";
import Skills from "src/components/Skills";
import Project from "src/components/Project";
// // icons
import { ArrowUp } from "tabler-icons-react";

// -------------------------------------------------

const useStyles = createStyles((theme) => ({
  sticky: {
    position: "sticky",
    zIndex: 9999,
    bottom: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.fn.largerThan("md")]: {
      paddingBottom: 75,
      marginRight: 75,
    },
    [theme.fn.smallerThan("md")]: {
      paddingBottom: 25,
      marginRight: 25,
    },
  },
}));

export default function LandingPage() {
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
      <Section withBackground={false} isFirst={true}>
        <Hero />
      </Section>
      <Section withBackground={true}>
        <About />
      </Section>
      <Section withBackground={false}>
        <Skills />
      </Section>
      <Section withBackground={true} height={"200hv"}>
        <Github />
      </Section>
      <Section withBackground={false} height={"200hv"}>
        <Project />
      </Section>
      <div className={classes.sticky}>
        <ActionIcon
          variant="filled"
          color="gray"
          radius={50}
          aria-label="Scroll to top"
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
