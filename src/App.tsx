import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import AppRoutes from "./Routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <HelmetProvider>
              <ThemeConfig>
                <AppRoutes />
              </ThemeConfig>
            </HelmetProvider>
            <ToastContainer />
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
