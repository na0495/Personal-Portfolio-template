// Mantine
import { ActionIcon, Button, createStyles } from "@mantine/core";
// parallex
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { debug } from "console";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp } from "tabler-icons-react";
// components
import { Hero } from "../components/Hero";

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
}));

export default function LandingPage() {
  const { classes } = useStyles();
  const alignCenter = { display: "flex", alignItems: "center" };
  const [currentOffset, setCurrentOffset] = useState(0);
  const parallax = useRef<IParallax>(null!)
  const containerRef = useRef();


  const handleParallaxNavigationDown = () => {
    // get the current parallax offset and then navigate to the next layer
    const offset = parallax.current.offset;
    console.log(offset);
    parallax.current.scrollTo(offset + 1);
    setCurrentOffset(offset + 1);
  };
  const handleParallaxNavigationUp = () => {
    // get the current parallax offset and then navigate to the next layer
    const offset = parallax.current.offset;
    console.log(offset);
    parallax.current.scrollTo(offset - 1);
    setCurrentOffset(offset - 1);
  }

  return (
    <Parallax pages={3} ref={parallax} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          ...alignCenter,
          justifyContent: "center",
        }}
      >
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 0, end: 2 }}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingBottom: 75,
          paddingRight: 75,
        }}
      >
        <ActionIcon
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
        </ActionIcon>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2} className={classes.about}>
        <p>Coming soon ...</p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2} className={classes.about}>
        <p>Coming soon ...</p>
      </ParallaxLayer>
    </Parallax>
  );
}
