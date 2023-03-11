import { useState } from "react";
// Mantine
import { ActionIcon, createStyles } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
// components
import About from "../components/About";
import Github from "../components/Github";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skills from "../components/Skills";
import Project from "../components/Project";
// // icons
import { ArrowUp } from "tabler-icons-react";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import GithubWrapped from "../components/GithubWrapped";

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
      <ParticlesWrapper />
    </>
  );
}
