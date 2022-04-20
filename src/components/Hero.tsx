// mantine
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Grid,
} from "@mantine/core";
// icons
import { Check, Point } from "tabler-icons-react";
import Type from "./animations/Type";
// svg
import HeroSvg from "/src/assets/hero.svg?url";

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

export function Hero() {
  const { classes } = useStyles();
  return (
    <Container mt={100} px="lg">
      <Grid grow justify="center">
        <Grid.Col md={5} mt={75}>
          <Title className={classes.title}>
            I'm <span className={classes.highlight}>Mrabet saâd</span> a <br />{" "}
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
            <Button radius="xl" size="md" className={classes.control}>
              Find out
            </Button>
            <Button variant="default" radius="xl" size="md">
              Download cv
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col md={5}>
          <Image src={HeroSvg} className={classes.image} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
