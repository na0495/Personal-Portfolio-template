import { useState } from "react";
// Mantine
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Text,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
// Icons
import {
  BrandTwitter,
  BrandGithub,
  BrandLinkedin,
  DeviceLaptop,
} from "tabler-icons-react";
import SwitchMode from "./SwitchMode";
import LanguagePopover from "./LanguagePopover";
import MusicMode from "./MusicMode";

// -------------------------------------------------

const useStyles = createStyles((theme) => ({
  header: {
    backdropFilter: "blur(50px)",
    position: "-webkit-sticky",
    top: "0",
    zIndex: 3,
    boxShadow: `${theme.shadows.md} !important`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
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
        : theme.colors.white[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

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
      fontWeight: 600,
      transform: "scale(1.10)",
    },
  },
  logo: {
    border: `2px solid`,
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.gray[0],
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.white : theme.colors.gray[7],
    color: theme.colorScheme === "dark" ? theme.black : theme.white,
    boxShadow: `${theme.shadows.md} !important`,
  },
}));

interface PortfolioHeaderProps {
  links: { link: string; label: string }[];
}

export default function PortfolioHeader({ links }: PortfolioHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={70} mb={120} className={classes.header}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Group className={classes.logo}>
          <DeviceLaptop size={24} />
          <Text weight={900}>Na0495 Portfolio</Text>
        </Group>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" ml={20}>
            <BrandTwitter size={24} />
          </ActionIcon>
          <ActionIcon size="lg" ml={20}>
            <BrandGithub size={24} />
          </ActionIcon>
          <ActionIcon size="lg" ml={20}>
            <BrandLinkedin size={24} />
          </ActionIcon>
        </Group>
        <SwitchMode />
        <MusicMode />
        <LanguagePopover />
      </Container>
    </Header>
  );
}
