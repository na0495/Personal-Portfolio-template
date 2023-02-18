import ReactGA from "react-ga4";
// mantine
import { NotificationsProvider } from "@mantine/notifications";
// routes
import Router from "./routes";
// components
import MotionLazyContainer from "./components/animations/MotionLazyContainer";
import ScrollToTop from "./components/ScrollToTop";
import Seo from "./components/Seo";
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
