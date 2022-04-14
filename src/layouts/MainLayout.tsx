// React
import { Outlet } from "react-router-dom";
// Manatine UI
import {
  AppShell,
  Header,
  Text,
  useMantineTheme,
} from "@mantine/core";
// header
import SwitchMode from "./header/SwitchMode";
import LanguagePopover from "./header/LanguagePopover";
import { CustomHeader } from "./header/CustomHeader";

//-----------------------------------------------------------------------------

const tabs = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  }
]

export default function MainLayout(): JSX.Element {
  const theme = useMantineTheme();
  return (
    <AppShell
      navbarOffsetBreakpoint={theme.breakpoints.sm}
      fixed
      header={
        <CustomHeader tabs={tabs} />
      }
      // styles={(theme) => ({
      //   main: {
      //     backgroundColor:
      //       theme.colorScheme === "dark"
      //         ? theme.colors.dark[6]
      //         : theme.colors.gray[0],
      //   },
      // })}
    >
      <Outlet />
    </AppShell>
  );
}
