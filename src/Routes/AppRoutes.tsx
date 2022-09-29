import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Box from "@mui/material/Box";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Box component="main" sx={{ pt: { xs: "4rem", md: "4rem" }, pb: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
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
