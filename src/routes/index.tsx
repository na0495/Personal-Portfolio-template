import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// hooks
// layouts
import MainLayout from "../layouts/MainLayout";
// components
import FallbackLoader from "../components/animations/FallbackLoader";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Routes() {
  return useRoutes([
    // Auth Routes
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
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const AboutPage = Loadable(lazy(() => import("../pages/AboutPage")));
const SkillsPage = Loadable(lazy(() => import("../pages/SkillsPage")));
const ProjectsPage = Loadable(lazy(() => import("../pages/ProjectsPage")));
const ContactPage = Loadable(lazy(() => import("../pages/ContactPage")));
