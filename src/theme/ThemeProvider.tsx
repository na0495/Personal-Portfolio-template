import { ReactNode } from "react";
// Mantine
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  ButtonStylesParams,
  ActionIconStylesParams,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
// theme
import { themeColors, themeBreakpoints } from "./theme";

// -----------------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider(props: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });
  useHotkeys([["shift+J", () => toggleColorScheme()]]);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: { ...themeColors },
          breakpoints: { ...themeBreakpoints },

          components: {
            Button: {
              // Subscribe to theme and component params
              styles: (theme, params: ButtonStylesParams) => ({
                root: {
                  "&:hover": {
                    boxShadow: `${theme.shadows.md} !important`,
                    transform: "scale(1.05)",
                  },
                },
              }),
            },
            ActionIcon: {
              styles: (theme, params: ActionIconStylesParams) => ({
                root: {
                  "&:hover": {
                    boxShadow: `${theme.shadows.md} !important`,
                    transform: "scale(1.05)",
                  },
                },
              }),
            },
          },
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
