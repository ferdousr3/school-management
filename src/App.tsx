import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import AppRoutes from "./Routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <ThemeConfig>
            <AppRoutes />
          </ThemeConfig>
        </HelmetProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
