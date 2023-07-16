import { ElementType, lazy, Suspense, useEffect } from "react";
import ReactGA from "react-ga4";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import MainLayout from "src/layouts/MainLayout";
// components
import FallbackLoader from "src/components/animations/FallbackLoader";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Routes() {
  useEffect(() => {
    ReactGA.send(window.location.pathname + window.location.search);
  }, [window.location.pathname, window.location.search]);

  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "", element: <LandingPage /> }],
    },
    {
      path: "/about",
      element: <MainLayout />,
      children: [{ path: "", element: <AboutPage /> }],
    },
    {
      path: "/skills",
      element: <MainLayout />,
      children: [{ path: "", element: <SkillsPage /> }],
    },
    {
      path: "/projects",
      element: <MainLayout />,
      children: [{ path: "", element: <ProjectsPage /> }],
    },
    {
      path: "/contact",
      element: <MainLayout />,
      children: [{ path: "", element: <ContactPage /> }],
    },
    {
      path: "/path",
      element: <MainLayout />,
      children: [{ path: "", element: <PathPage /> }],
    },
    {
      path: "/game",
      element: <MainLayout />,
      children: [{ path: "", element: <Game /> }],
    },
    // Main Routes
    {
      path: "*",
      // element: <LogoOnlyLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// Main
const ComingSoon = Loadable(lazy(() => import("src/pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("src/pages/Maintenance")));
const Page500 = Loadable(lazy(() => import("src/pages/Page500")));
const NotFound = Loadable(lazy(() => import("src/pages/Page404")));
const LandingPage = Loadable(lazy(() => import("src/pages/LandingPage")));
const AboutPage = Loadable(lazy(() => import("src/pages/AboutPage")));
const SkillsPage = Loadable(lazy(() => import("src/pages/SkillsPage")));
const ProjectsPage = Loadable(lazy(() => import("src/pages/ProjectsPage")));
const ContactPage = Loadable(lazy(() => import("src/pages/ContactPage")));
const HomePage = Loadable(lazy(() => import("src/pages/HomePage")));
const PathPage = Loadable(lazy(() => import("src/pages/PathPage")));
const Game = Loadable(lazy(() => import("src/components/Game")));
