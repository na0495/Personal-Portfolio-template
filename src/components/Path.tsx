import { useEffect, useState } from "react";
// Mantine
import {
  Badge,
  Container,
  createStyles,
  ScrollArea,
  Text,
  Timeline,
  useMantineTheme,
} from "@mantine/core";
// motion
// Components
import BoxWrapper from "./BoxWrapper";
// _mock
import { path } from "../_mock/path";
// lib
import {
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

  // useEffect(() => {
  //   // calculate the total working month based on path.start and today date
  //   const today = new Date();
  //   const start = new Date(path.current.start);
  //   setTotalMonth(monthDiff(start, today));
  // }, [path.current.start]);

  // const features = path.current.badges.map((badge) => (
  //   <Badge
  //     className={classes.badge}
  //     color={theme.colorScheme === "dark" ? "dark" : "gray"}
  //     key={badge.label}
  //   >
  //     {badge.label}
  //   </Badge>
  // ));

  const items = path.map((item, index) => {
    return (
      <Timeline.Item bullet={<GitBranch size={12} />} title="New branch">
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
    );
  });

  return (
    <Container px="xl" size="lg" sx={{ zIndex: 5 }}>
      <BoxWrapper withBackground={false}>
        <ScrollArea
          style={{ height: 300, width: 350 }}
          type="scroll"
          offsetScrollbars
          scrollbarSize={14}
        >
          <Timeline
            color="orange"
            active={2}
            reverseActive
            lineWidth={8}
            bulletSize={30}
          >
            {items}
          </Timeline>
        </ScrollArea>
      </BoxWrapper>
    </Container>
  );
}
