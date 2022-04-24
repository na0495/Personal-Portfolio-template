// Mantine
import {
  Container,
  Card,
  Image,
  Avatar,
  Title,
  Text,
  Grid,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// icons
import { Heart } from "tabler-icons-react";
// _mock
import path from "../_mock/path.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    boxShadow: `${theme.shadows.md} !important`,
    // on hover scale up and make the animation smoother

    "&:hover": {
      boxShadow: `${theme.shadows.lg} !important`,
      transform: 'scale(1.02)',
      
    },
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  badge: {},
}));

export default function Path() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [totalMonth, setTotalMonth] = useState(0);

  function monthDiff(dateFrom: Date, dateTo: Date) {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  }

  useEffect(() => {
    // calculate the total working month based on path.start and today date
    const today = new Date();
    const start = new Date(path.start);
    setTotalMonth(monthDiff(start, today));
  }, [path.start]);

  console.log(totalMonth);

  const features = path.badges.map((badge) => (
    <Badge
      className={classes.badge}
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
    >
      {badge.label}
    </Badge>
  ));
  return (
    <Container px="xl" size="lg">
      <BoxWrapper>
        <Grid>
          <Grid.Col xs={12} md={6}>
            <Card withBorder radius="lg" p="md" className={classes.card}>
              <Card.Section>
                <Image src={path.image} alt={path.title} height={180} />
              </Card.Section>

              <Card.Section className={classes.section} mt="md">
                <Group position="apart" mb={10}>
                  <Group>
                    <motion.img
                      style={{
                        width: 65,
                        height: 65,
                        borderRadius: 15,
                        margin: 2,
                        border: `1px solid ${
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[4]
                            : theme.colors.gray[3]
                        }`,
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      src={"/src/assets/sowit.png"}
                      alt={"sowit"}
                    />

                      <Text size="lg" weight={500}>
                        {path.title}
                      </Text>
                  </Group>
                    <Text size="md">{path.company}</Text>
                </Group>
                <Group position="apart">
                  <Text size="md" weight={500}>
                    {path.start} to today (
                    <CountUp start={0} end={totalMonth} duration={2} /> months)
                  </Text>
                </Group>
                <Text size="sm" mt="xs">
                  {path.description}
                </Text>
              </Card.Section>

              <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} color="dimmed">
                  Technologies
                </Text>
                <Group spacing={7} mt={5}>
                  {features}
                </Group>
              </Card.Section>

              <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                  Show details
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                  <Heart size={18} className={classes.like} />
                </ActionIcon>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </BoxWrapper>
    </Container>
  );
}
