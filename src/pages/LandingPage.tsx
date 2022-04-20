// Mantine
import { createStyles } from "@mantine/core";
// parallex
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
        display: "flex", alignItems: "center" 
        , justifyContent: "center"
  },
}));

export default function LandingPage() {
  const { classes } = useStyles();
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
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
        offset={1}
        speed={2}
        className={classes.about} 
      >
        <p>Coming soon ...</p>
      </ParallaxLayer>
    </Parallax>
  );
}
