// mantine
import {
  Box,
  Button,
  Center,
  createStyles,
  Grid,
  Group,
  Paper,
  Title,
} from "@mantine/core";
// icons
import Type from "./animations/Type";
// svg
//
import HeroCanvas from "./HeroCanvas";

// --------------------------------------------------

const useStyles: any = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("md")]: {
      fontSize: 34,
    },
  },

  box: {
    [theme.fn.smallerThan("md")]: {
      marginTop: 100,
      marginRight: 0,
    },
    [theme.fn.largerThan("md")]: {
      maxWidth: 600,
      minWidth: 450,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
    background:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.orange[1],
    color: theme.colorScheme === "dark" ? theme.colors.gray[9] : theme.white,
    "&:hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[5]
          : theme.colors.orange[1],
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
        : theme.colors.orange[1],
    borderRadius: theme.radius.lg,
    padding: "4px 12px",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <Group pr={10}>
      <Grid justify="space-between" align="center">
        <Grid.Col lg={6} md={7} sm={12} mt={75}>
          <Center>
            <Box className={classes.box}>
              <Title className={classes.title}>
                I'm <span className={classes.highlight}>Mrabet saâd</span> a{" "}
                <br />{" "}
              </Title>
              <Title
                sx={(theme) => ({
                  marginTop: 25,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[4]
                      : theme.colors.orange[3],
                  [theme.fn.smallerThan("md")]: {
                    fontSize: 28,
                  },
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
        <Grid.Col lg={6} md={5} sm={12}>
          <Center>
            <Paper
              shadow="lg"
              p="md"
              radius="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[2]
                    : theme.colors.orange[1],

                [theme.fn.smallerThan("sm")]: {
                  marginTop: 125,
                  width: 225,
                  height: 225,
                },
                [theme.fn.largerThan("sm")]: {
                  marginTop: 125,
                  minWidth: 400,
                  minHeight: 400,
                },
                boxShadow: `0 0 10px ${
                  theme.colorScheme === "dark"
                    ? theme.colors.white[3]
                    : theme.colors.white[4]
                } !important`,
              })}
            >
              <HeroCanvas />
            </Paper>
          </Center>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
