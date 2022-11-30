// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga";
// providers
import ThemeProvider from "./theme/ThemeProvider";
// config
import { googleAnlyticId } from "./config";
import { Seo } from "tabler-icons-react";

// -----------------------------------------------------------------------------

ReactGA.initialize(googleAnlyticId);

// -----------------------------------------------------------------------------

function App() {

  console.log(googleAnlyticId)
  return (
    <ThemeProvider>
      <Seo />
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
