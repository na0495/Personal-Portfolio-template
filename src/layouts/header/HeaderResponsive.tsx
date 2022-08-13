import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SwitchMode from "./SwitchMode";
import MusicMode from "./MusicMode";
import { BrandTwitter, BrandGithub, BrandLinkedin } from "tabler-icons-react";

// -------------------------------------------------

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
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

  icon: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.10)",
      borderRadius: theme.radius.sm,
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
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
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
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
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
          : theme.colors.orange[1],
      borderRadius: theme.radius.sm,
      color: theme.colors.white[9],
    },
  },
}));

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

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
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
        close();
      }}
    >
      {link.label}
    </a>
    
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
        <Group spacing={0} className={classes.social} position="right" noWrap mr={25}>
          {socialLinks.map((link) => (
            <ActionIcon
              key={link.label}
              size="lg"
              ml={15}
              radius="xl"
              className={classes.icon}
              component="a"
              href={link.href}
              target="_blank"
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
