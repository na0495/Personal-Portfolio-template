import { useState } from "react";
import { useNavigate } from "react-router-dom";
// motion
import { motion } from "framer-motion";
// Manatine UI
import {
  ActionIcon,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// icons
import { BrandGithub, BrandLinkedin, BrandTwitter } from "tabler-icons-react";
// hooks
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";
// buttons
import MusicMode from "./MusicMode";
import SwitchMode from "./SwitchMode";
// sounds
import useSound from "use-sound";
// assets
import soundUrl from "/src/assets/sounds/rising-pops.mp3";

// -------------------------------------------------

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  root: {
    // position: "relative",
    zIndex: 1,
    boxShadow: theme.shadows.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  social: {
    [theme.fn.smallerThan("md")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    marginRight: theme.spacing.md,
    textDecoration: "none",
    color:
      theme.colorScheme === "light"
        ? theme.colors.dark[9]
        : theme.colors.white[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  //

  additonalLinks: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[7]
          : theme.colors.orange[0],
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.10)",
      borderRadius: theme.radius.sm,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[6]
          : theme.colors.orange[2],
      borderRadius: theme.radius.sm,
      color: theme.colors.white[9],
      borderShadow: `${theme.shadows.md} !important`,
    },
  },
}));

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/na0495",
    icon: <BrandTwitter size={28} />,
    color: "#1DA1F2",
  },
  {
    label: "Github",
    href: "https://github.com/na0495",
    icon: <BrandGithub size={28} />,
    color: "#24292e",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/saad-mrabet-978a01188/",
    icon: <BrandLinkedin size={28} />,
    color: "#0077B5",
  },
];

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const navigate = useNavigate();
  const gaEventTracker = useAnalyticsEventTracker({
    category: "Header",
    action: "Click",
  });
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [play] = useSound(soundUrl, { volume: 0.2 });

  const items = links.map((link) => (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      key={link.label}
      href={link.link}
      className={cx(
        classes.link,
        {
          [classes.linkActive]: active === link.link,
        },
        { [classes.additonalLinks]: opened === false }
      )}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
        gaEventTracker({ label: link.label });
        play();
        close();
      }}
    >
      {link.label}
    </motion.a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={50} className={classes.root}>
      <Container className={classes.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Group
          spacing={0}
          className={classes.social}
          position="right"
          noWrap
          mr={25}
        >
          {socialLinks.map((link) => (
            <ActionIcon
              key={link.label}
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
              {link.icon}
            </ActionIcon>
          ))}
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          <SwitchMode />
          <MusicMode />
        </Group>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
