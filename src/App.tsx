// routes
import Router from "./routes";
// Mantine
// // components
import ScrollToTop from "./components/ScrollToTop";
// providers
import ThemeProvider from "./theme/ThemeProvider";


// -----------------------------------------------------------------------------

function App() {
  return (
    <ThemeProvider>
      {/* <CustomSpotlightProvider> */}
            <ScrollToTop />
            <Router />
      {/* </CustomSpotlightProvider> */}
    </ThemeProvider>
  );
}

export default App;
