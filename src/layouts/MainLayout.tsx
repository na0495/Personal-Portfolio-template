// React
import { Outlet } from "react-router-dom";
// Manatine UI
import { AppShell, Header, Text, useMantineTheme } from "@mantine/core";
// header
import SwitchMode from "./header/SwitchMode";
import LanguagePopover from "./header/LanguagePopover";
import PotfolioHeader from "./header/PotfolioHeader";
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import Footer from "../components/Footer";

//-----------------------------------------------------------------------------

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
];

export default function MainLayout(): JSX.Element {
  const theme = useMantineTheme();
  return (
    <AppShell
      navbarOffsetBreakpoint={theme.breakpoints.sm}
      fixed
      header={<PotfolioHeader links={links} />}
    >
      <Outlet />
      <Footer />
    </AppShell>
  );
}
