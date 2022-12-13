// Mantine
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
//  Icons
import { BrandTwitter, BrandGithub, BrandLinkedin } from "tabler-icons-react";

// --------------------------------------------------

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/na0495",
    icon: <BrandTwitter size={28} />,
  },
  {
    label: "Github",
    href: "https://github.com/na0495",
    icon: <BrandGithub size={28} />,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/saad-mrabet-978a01188/",
    icon: <BrandLinkedin size={28} />,
  },
];

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
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          Copyright © 2022 na0495 All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {socialLinks.map((link) => (
            <ActionIcon
              key={link.label}
              size="xl"
              ml={20}
              radius="lg"
              className={classes.icon}
              component="a"
              href={link.href}
              target="_blank"
            >
              {link.icon}
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </footer>
  );
}
