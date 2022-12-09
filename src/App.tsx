import ReactGA from "react-ga";
import { Seo } from "tabler-icons-react";
// mantine
import { NotificationsProvider } from "@mantine/notifications";
// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/ScrollToTop";
// providers
import ThemeProvider from "./theme/ThemeProvider";
// config
import { googleAnlyticId } from "./config";

// -----------------------------------------------------------------------------

function App() {
  ReactGA.initialize(googleAnlyticId);
  return (
    <ThemeProvider>
      <NotificationsProvider>
        <Seo />
        <ScrollToTop />
        <Router />
      </NotificationsProvider>
    </ThemeProvider>
  );
}

export default App;
