import { Route, Routes } from "react-router-dom";
import PasswordReset from "../auth/PasswordReset";
import RequireAuth from "../auth/RequireAuth";
import AddNewBlog2 from "../Dashboard/Blogs/AddNewBlogs";
import DAllUsers from "../Dashboard/DAllUsers/DAllUsers";
import DBanking from "../Dashboard/DBanking/DBanking";

import BlogDetails from "../pages/Blogs/BlogDetails";
// import Events from "../pages/Events/Events";
import Events from "../pages/Events/Events";
import AllBlogs from "../Dashboard/Blogs/AllBlogs";
import DUserProfile from "../Dashboard/DUserProfile/DUserProfile";
// import Dashboard from "../Dashboard/Layout/Dashboard";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "./MainLyout";
import DashboardLayout from "../Dashboard/Layout/DashboardLayout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* main part start */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog/:blogId" element={<BlogDetails />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="forgotPassword" element={<PasswordReset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
        {/* main part end */}
        {/* Dashboard part start */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              {/* <Dashboard /> */}
              <DashboardLayout />
            </RequireAuth>
          }
        >
          <Route index element={<DUserProfile />} />
          <Route path="allUsers" element={<DAllUsers />} />
          <Route path="banking" element={<DBanking />} />
          <Route path="new-blog" element={<AddNewBlog2 />} />
          <Route path="all-blog" element={<AllBlogs />} />
        </Route>
        {/* Dashboard part end */}

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
