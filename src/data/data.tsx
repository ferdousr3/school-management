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
  events: [
    {
      id: 1,
      name: "Alumni for Old Student",
      day: 24,
      month: "dec",
      time: "10:00 - 16.00 ",
      organizer: "School Comity",
      place: "Dhakamor, Fulbari, Dinajpur",
      status: "coming Soon",
    },
    {
      id: 2,
      name: "100 year pass School -2022 ",
      day: 25,
      month: "dec",
      time: "10:00  - 12:10 ",
      organizer: "School Comity",
      place: "Dhakamor, Fulbari, Dinajpur",
      status: "coming Soon",
    },
    {
      id: 3,
      name: "100 year pass celebrating -2022 ",
      day: 25,
      month: "dec",
      time: "12:30 - 16:00  ",
      organizer: "School Comity",
      place: "Dhakamor, Fulbari, Dinajpur",
      status: "coming Soon",
    },
  ],
};

export default data;
