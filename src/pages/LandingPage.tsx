import { useRef, useState } from "react";
// Mantine
import { ActionIcon, createStyles } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
// parallex
import { ArrowDown, ArrowUp } from "tabler-icons-react";
import About from "../components/About";
import BoxWrapper from "../components/BoxWrapper";
// components
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";
// mock
import footer from "../_mock/footer.json";
import Page from "../components/Page";
import Skills from "../components/Skills";

// -------------------------------------------------

const useStyles = createStyles((theme) => ({
  skills: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[9]
        : theme.colors.gray[8],
  },
  about: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[3]
        : theme.colors.orange[3],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navigation: {
    position: "absolute",
    bottom: "0",
    right: "0",
  },
  footer: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[3]
        : theme.colors.orange[3],
    bottom: "0",
  },
}));

export default function LandingPage() {
  const { classes } = useStyles();
  const alignCenter = { display: "flex", alignItems: "center" };
  const [currentOffset, setCurrentOffset] = useState(0);
  //   const parallax = useRef<IParallax>(null!);

  const handleParallaxNavigationDown = () => {
    // get the current parallax offset and then navigate to the next layer
    // const offset = parallax.current.offset;
    // console.log(offset);
    // parallax.current.scrollTo(offset + 1);
    // setCurrentOffset(offset + 1);
  };
  const handleParallaxNavigationUp = () => {
    // get the current parallax offset and then navigate to the next layer
    // const offset = parallax.current.offset;
    // console.log(offset);
    // parallax.current.scrollTo(offset - 1);
    // setCurrentOffset(offset - 1);
  };

  return (
    <>
      <Page withBackground={false} isFirst={true}>
        <Hero />
      </Page>
      <Page withBackground={true}>
        <About />
      </Page>
      {/* <ActionIcon
        variant="filled"
        color="gray"
        radius={50}
        onClick={handleParallaxNavigationDown}
        disabled={currentOffset >= 2}
        size={45}
        mr={25}
      >
        <ArrowDown />
      </ActionIcon>
      <ActionIcon
        variant="filled"
        color="gray"
        radius={50}
        onClick={handleParallaxNavigationUp}
        disabled={currentOffset <= 0}
        size={45}
      >
        <ArrowUp />
      </ActionIcon> */}

      <Page withBackground={false}>
          <Skills />
      </Page>
    </>
  );
}
