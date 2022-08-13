// mantine
import {
  createStyles,
  Title,
  Button,
  Group,
  Grid,
  Center,
  Box,
} from "@mantine/core";
// icons
import Type from "./animations/Type";
// svg
import { Player } from "@lottiefiles/react-lottie-player";
//
import CodingJson from "/src/assets/animations/coding.json?url";

// --------------------------------------------------

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
    background:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.orange[2],
    color: theme.colorScheme === "dark" ? theme.colors.gray[9] : theme.white,
    "&:hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[5]
          : theme.colors.orange[3],
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.yellow[6], 0.55)
        : theme.colors.orange[2],
    borderRadius: theme.radius.lg,
    padding: "4px 12px",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <Group>
      <Grid grow justify="center">
        <Grid.Col md={4} mt={150} sm={10}>
          <Center>
            <Box>
              <Title className={classes.title}>
                I'm <span className={classes.highlight}>Mrabet saâd</span> a{" "}
                <br />{" "}
              </Title>
              <Title
                sx={(theme) => ({
                  marginTop: 25,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[2]
                      : theme.colors.orange[3],
                })}
              >
                <Type />
              </Title>
              <Group mt={30}>
                <Button radius="lg" size="md" className={classes.control}>
                  Find out
                </Button>
                <Button variant="default" radius="lg" size="md">
                  Download cv
                </Button>
              </Group>
            </Box>
          </Center>
        </Grid.Col>
        <Grid.Col md={7} sm={10} xs={8}>
          <Player
            autoplay
            loop
            src={CodingJson}
            style={{
              height: "650px",
              width: "650px",
              marginTop: -100,
              backgroundColor: "transparent",
            }}
          />
        </Grid.Col>
      </Grid>
    </Group>
  );
}
