// React
import { Outlet } from "react-router-dom";
// Manatine UI
import { AppShell, useMantineTheme } from "@mantine/core";
// header
import PotfolioHeader from "./header/PotfolioHeader";
import Footer from "../components/Footer";

//-----------------------------------------------------------------------------

const links = [
  {
    label: "Landing",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Skills",
    link: "/skills",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Contact",
    link: "/contact",
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
