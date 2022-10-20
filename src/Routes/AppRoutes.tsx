import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Layout/Dashboard";
import MainLayout from "./MainLyout";
import DUserProfile from "../pages/Dashboard/DUserProfile/DUserProfile";
import DAllUsers from "../pages/Dashboard/DAllUsers/DAllUsers";
import DBanking from "../pages/Dashboard/DBanking/DBanking";
import RequireAuth from "../auth/RequireAuth";
import Blogs from "../pages/Blogs/Blogs";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* main part start */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
        {/* main part end */}
        {/* Dashboard part start */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<DUserProfile />} />
          <Route path="allUsers" element={<DAllUsers />} />
          <Route path="banking" element={<DBanking />} />
        </Route>
        {/* Dashboard part end */}

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
