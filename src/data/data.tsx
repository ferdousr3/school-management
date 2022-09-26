import Logo from "../assets/logo/logo.png";

const data = {
  logoImage: Logo,
  navItems: [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Login", path: "/login" },
    { text: "Sign Up", path: "/signUp" },
  ],

  schoolDetails: {
    name: "FULBARI GM PILOT HIGH SCHOOL",
    shortName: "FGMP High School",
    address: "Fulbari, Dinajpur",
  },
  footerLink: [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "About",
      path: "/About",
    },
    {
      id: 3,
      text: "Login",
      path: "/login",
    },
    {
      id: 4,
      text: "Sign up",
      path: "/signUp",
    },
    {
      id: 5,
      text: " Release Status",
      path: "/",
    },
  ],
};

export default data;
