// React
import { Outlet } from "react-router-dom";
// Manatine UI
import { AppShell, useMantineTheme } from "@mantine/core";
// header
import Footer from "src/components/Footer";
import HeaderResponsive from "./header/HeaderResponsive";

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
  // {
  //   label: "Path",
  //   link: "/path",
  // },
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
    <>
      <AppShell
        navbarOffsetBreakpoint={theme.breakpoints.md}
        fixed
        header={<HeaderResponsive links={links} />}
      >
        <Outlet />
      </AppShell>
      <Footer />
    </>
  );
}
