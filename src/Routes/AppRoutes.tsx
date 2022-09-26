import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Box from "@mui/material/Box";

const AppRoutes = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Box component="main" sx={{ pt: { xs: "5rem", md: "5rem" }, pb: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Box>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AppRoutes;
