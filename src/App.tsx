import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import AppRoutes from "./Routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <ThemeConfig>
            <AppRoutes />
          </ThemeConfig>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
