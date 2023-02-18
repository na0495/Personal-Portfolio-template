// Mantine
import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  Text,
} from "@mantine/core";
//  Icons
// hooks
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";
import { socialLinks } from "../_mock/links";

// --------------------------------------------------

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[3],
    width: "100%",
    zIndex: 5,
  },

  icon: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.2)",
      borderRadius: theme.radius.sm,
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  const gaEventTracker = useAnalyticsEventTracker({
    category: "Footer",
    action: "Click",
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          Copyright © 2022 na0495 All rights reserved, view the source code on{" "}
          <a
            href="https://github.com/na0495/Personal-Portfolio-template"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {socialLinks.map((link) => (
            <ActionIcon
              key={link.label}
              aria-label={link.label}
              size="lg"
              ml={15}
              radius="md"
              component="a"
              href={link.href}
              target="_blank"
              onClick={() => {
                gaEventTracker({
                  label: link.label,
                });
              }}
              sx={{
                backgroundColor: link.color,
                color: "white",
                "&:hover": {
                  backgroundColor: link.color,
                  boxShadow: "none",
                  transform: "scale(1.10)",
                  borderRadius: "md",
                },
              }}
            >
              <link.icon size={28} />
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </footer>
  );
}
