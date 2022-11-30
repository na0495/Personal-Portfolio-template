// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/ScrollToTop";
// providers
import ThemeProvider from "./theme/ThemeProvider";
// config
import { Seo } from "tabler-icons-react";

// -----------------------------------------------------------------------------

function App() {
  return (
    <ThemeProvider>
      <Seo />
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
