import { createStyles, Switch, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import useSound from "use-sound";
// import lightswitch from "/src/assets/audio/lightswitch.mp3?url";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "1rem",
    "& *": {
      cursor: "pointer",
    },
  },

  icon: {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 1,
    top: 3,
  },

  iconLight: {
    left: 4,
    color: theme.white,
  },

  iconDark: {
    right: 4,
    color: theme.colors.gray[6],
  },
}));

export default function SwitchMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();
  const dark = colorScheme === "dark";

  // sound effects on click
  // const [play] = useSound(lightswitch, {
  //   volume: 0.25,
  //   sprite: {
  //     on: [0, 300],
  //     off: [500, 300],
  //   },
  // });

  const handleClick = () => {
    // colorScheme === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorScheme();
  };

  return (
    <div className={classes.root}>
      <Sun className={cx(classes.icon, classes.iconLight)} size={22} />
      <MoonStars className={cx(classes.icon, classes.iconDark)} size={22} />
      <Switch
        color={dark ? "" : "yellow"}
        checked={colorScheme !== "dark"}
        onChange={() => handleClick()}
        size="lg"
      />
    </div>
  );
}
