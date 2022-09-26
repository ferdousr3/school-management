import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeConfig>
          <AppRoutes />
        </ThemeConfig>
      </BrowserRouter>
    </>
  );
}

export default App;
