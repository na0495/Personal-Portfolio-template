// Mantine
import {
  ActionIcon,
  createStyles,
  Switch,
  useMantineColorScheme,
} from "@mantine/core";
// Motion
import { AnimatePresence, motion } from "framer-motion";
// Icons
import { Sun, MoonStars } from "tabler-icons-react";
// sounds
import useSound from "use-sound";
// mp3
import LightSwitch from "/src/assets/sounds/lightswitch.mp3?url";

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
  const dark = colorScheme === "dark";

  // sound effects on click
  const [play] = useSound(LightSwitch, {
    volume: 0.25,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    colorScheme === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorScheme();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={colorScheme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ActionIcon
          size="xl"
          color={dark ? "grape" : "yellow"}
          onClick={handleClick}
          variant="filled"
          radius="xl"
        >
          {colorScheme !== "dark" ? <Sun size={24} /> : <MoonStars />}
        </ActionIcon>
      </motion.div>
    </AnimatePresence>
  );
}
