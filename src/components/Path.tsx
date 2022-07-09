import { useEffect, useState } from "react";
// Mantine
import {
  Container,
  Card,
  Image,
  Text,
  Grid,
  Group,
  Badge,
  createStyles,
  useMantineTheme,
  Timeline,
  Tabs,
  ScrollArea,
} from "@mantine/core";
// motion
import { motion } from "framer-motion";
// Components
import BoxWrapper from "./BoxWrapper";
// _mock
import path from "../_mock/path.json";
// lib
import CountUp from "react-countup";
import {
  Book,
  DeviceLaptop,
  GitBranch,
  GitCommit,
  GitPullRequest,
  MessageDots,
} from "tabler-icons-react";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    boxShadow: `${theme.shadows.md} !important`,
    // on hover scale up and make the animation smoother

    // "&:hover": {
    //   boxShadow: `${theme.shadows.lg} !important`,
    //   transform: "scale(1.02)",
    // },
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
  badge: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[7]
        : theme.colors.gray[3],
  },
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
    const start = new Date(path.current.start);
    setTotalMonth(monthDiff(start, today));
  }, [path.current.start]);

  const features = path.current.badges.map((badge) => (
    <Badge
      className={classes.badge}
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
    >
      {badge.label}
    </Badge>
  ));
  return (
    <Container px="xl" size="lg" sx={{ zIndex: 5 }}>
      <BoxWrapper withBackground={false}>
        <Grid grow>
          <Grid.Col xs={12} sm={8} md={5}>
            <Tabs color="orange" tabPadding="xl" orientation="vertical">
              <Tabs.Tab label="Studies" icon={<Book size={14} />}>
              <ScrollArea style={{ height: 300, width: 350 }} type="scroll" offsetScrollbars scrollbarSize={14}>
      {/* ... content */}
                <Timeline
                  color="orange"
                  active={2}
                  reverseActive
                  lineWidth={8}
                  bulletSize={30}
                >
                  <Timeline.Item
                    bullet={<GitBranch size={12} />}
                    title="New branch"
                  >
                    <Text color="dimmed" size="sm">
                      You&apos;ve created new branch{" "}
                      <Text variant="link" component="span" inherit>
                        fix-notifications
                      </Text>{" "}
                      from master
                    </Text>
                    <Text size="xs" mt={4}>
                      2 hours ago
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    bullet={<GitCommit size={12} />}
                    title="Commits"
                  >
                    <Text color="dimmed" size="sm">
                      You&apos;ve pushed 23 commits to
                      <Text variant="link" component="span" inherit>
                        fix-notifications branch
                      </Text>
                    </Text>
                    <Text size="xs" mt={4}>
                      52 minutes ago
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    title="Pull request"
                    bullet={<GitPullRequest size={12} />}
                    lineVariant="dashed"
                  >
                    <Text color="dimmed" size="sm">
                      You&apos;ve submitted a pull request
                      <Text variant="link" component="span" inherit>
                        Fix incorrect notification message (#187)
                      </Text>
                    </Text>
                    <Text size="xs" mt={4}>
                      34 minutes ago
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    title="Code review"
                    bullet={<MessageDots size={12} />}
                  >
                    <Text color="dimmed" size="sm">
                      <Text variant="link" component="span" inherit>
                        Robert Gluesticker
                      </Text>{" "}
                      left a code review on your pull request
                    </Text>
                    <Text size="xs" mt={4}>
                      12 minutes ago
                    </Text>
                  </Timeline.Item>
                </Timeline>
    </ScrollArea>
              </Tabs.Tab>
              <Tabs.Tab label="Experience" icon={<DeviceLaptop size={14} />}>
              <ScrollArea style={{ height: 300, width: 350 }} type="scroll" offsetScrollbars scrollbarSize={14}>
      {/* ... content */}
                <Timeline
                  color="orange"
                  active={2}
                  reverseActive
                  lineWidth={8}
                  bulletSize={30}
                >
                  <Timeline.Item
                    bullet={<GitCommit size={12} />}
                    title="Commits"
                  >
                    <Text color="dimmed" size="sm">
                      You&apos;ve pushed 23 commits to
                      <Text variant="link" component="span" inherit>
                        fix-notifications branch
                      </Text>
                    </Text>
                    <Text size="xs" mt={4}>
                      52 minutes ago
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    title="Pull request"
                    bullet={<GitPullRequest size={12} />}
                    lineVariant="dashed"
                  >
                    <Text color="dimmed" size="sm">
                      You&apos;ve submitted a pull request
                      <Text variant="link" component="span" inherit>
                        Fix incorrect notification message (#187)
                      </Text>
                    </Text>
                    <Text size="xs" mt={4}>
                      34 minutes ago
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    title="Code review"
                    bullet={<MessageDots size={12} />}
                  >
                    <Text color="dimmed" size="sm">
                      <Text variant="link" component="span" inherit>
                        Robert Gluesticker
                      </Text>{" "}
                      left a code review on your pull request
                    </Text>
                    <Text size="xs" mt={4}>
                      12 minutes ago
                    </Text>
                  </Timeline.Item>
                </Timeline>
    </ScrollArea>
              </Tabs.Tab>
            </Tabs>
            {/* <Card withBorder radius="lg" p="md" className={classes.card}>
              <Card.Section>
                <Image
                  src={path.current.image}
                  alt={path.current.title}
                  height={200}
                />
              </Card.Section>

              <Card.Section className={classes.section} mt="md">
                <Group mb={10} position="apart">
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
                    <Group direction="column">
                      <Text size="lg" weight={500} mb={-10}>
                        {path.current.title}
                      </Text>
                      <Text size="md">{path.current.company}</Text>
                    </Group>
                  </Group>
                  <Group position="right">
                    <Text size="md" weight={500}>
                      {path.current.start} to <br /> today (
                      <CountUp start={0} end={totalMonth} duration={2} />{" "}
                      months)
                    </Text>
                  </Group>
                </Group>
                <Text size="sm" mt="xs">
                  {path.current.description}
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
            </Card> */}
          </Grid.Col>
          <Grid.Col xs={12} sm={8} md={5}>
            {/* {path.past.map((past) => (
              <Card
                key={past.title}
                withBorder
                radius="lg"
                p="md"
                className={classes.card}
                mb={15}
              >
                <Card.Section className={classes.section} mt="md">
                  <Group mb={10} position="apart">
                    <Group>
                      <motion.div
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
                          backgroundColor: "gray",
                        }}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                      />
                      <Group direction="column">
                        <Text size="lg" weight={500} mb={-10}>
                          {past.title}
                        </Text>
                        <Text size="md">{past.company}</Text>
                      </Group>
                    </Group>
                    <Group position="right">
                      <Text size="md" weight={500}>
                        {past.start} to <br /> {past.end}
                      </Text>
                    </Group>
                  </Group>
                </Card.Section>

                <Card.Section className={classes.section}>
                  <Text mt="md" className={classes.label} color="dimmed">
                    Technologies
                  </Text>
                  <Group spacing={7} mt={5}>
                    {past.badges.map((badge) => (
                      <Badge
                        className={classes.badge}
                        color={theme.colorScheme === "dark" ? "dark" : "gray"}
                        key={badge.label}
                      >
                        {badge.label}
                      </Badge>
                    ))}
                  </Group>
                </Card.Section>
              </Card>
            ))} */}
          </Grid.Col>
        </Grid>
      </BoxWrapper>
    </Container>
  );
}
