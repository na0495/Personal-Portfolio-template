import ReactGA from "react-ga4";
import { Seo } from "tabler-icons-react";
// mantine
import { NotificationsProvider } from "@mantine/notifications";
// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/ScrollToTop";
import MotionLazyContainer from "./components/animations/MotionLazyContainer";
// providers
import ThemeProvider from "./theme/ThemeProvider";
// config
import { googleAnlyticId } from "./config";

// -----------------------------------------------------------------------------

function App() {
  ReactGA.initialize(googleAnlyticId);
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <NotificationsProvider>
          <Seo />
          <ScrollToTop />
          <Router />
        </NotificationsProvider>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default App;
