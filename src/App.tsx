import ReactGA from "react-ga4";
// mantine
import { Notifications } from "@mantine/notifications";
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
        <Notifications />
        <Seo />
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default App;
