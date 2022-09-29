import Logo from "../assets/logo/logo.png";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AlbumIcon from "@mui/icons-material/Album";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const data = {
  logoImage: Logo,
  phoneNumber: "03-0134024567-1",
  address: "Street 21 York E Block 2101 France USA",
  navItems: [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Dashboard", path: "/dashboard" },
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
      text: "sign",
      path: "/login",
    },
    {
      id: 4,
      text: "Sign up",
      path: "/signUp",
    },
    {
      id: 5,
      text: " Contact",
      path: "/contact",
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
  about: {
    description: `Since ancient times, Dinajpur district has been politically, economically, socially and educationally underdeveloped compared to other regions. Dinajpur has been situated as an unbroken township since ancient times at the north-western edge of Barendra land. We get a lot of information about the educational system of Dinajpur during the Hindu period. Although there are no obstacles in the field of education for the Brahmins of Dinajpur, a large population here has been out of formal education for a long time due to the fact that the local tribals are considered very low-born.`,
    items: [
      {
        id: 1,
        details: "Better Care ",
      },
      {
        id: 2,
        details: "Better Teaching Method ",
      },
      {
        id: 3,
        details: "Every Month Parents Meeting ",
      },
    ],
    target: [
      {
        id: 1,
        icon: <CrisisAlertIcon />,
        title: "Our Mission",
        description:
          "Since ancient times, Dinajpur district has been politically, economically, socially and educationally.",
      },
      {
        id: 2,
        icon: <BeachAccessIcon />,
        title: "Our Vision",
        description:
          "Since ancient times, Dinajpur district has been politically, economically, socially and educationally.",
      },
      {
        id: 3,
        icon: <AlbumIcon />,
        title: "Our Goal",
        description:
          "Since ancient times, Dinajpur district has been politically, economically, socially and educationally.",
      },
    ],
  },
  contactDetails: [
    {
      id: 1,
      icon: <PinDropRoundedIcon />,
      text: "Dhakamor, Fulbari",
      text2: " Dinajpur",
    },
    {
      id: 2,
      icon: <MarkEmailUnreadRoundedIcon />,
      text: "Example@gmail.com",
      text2: " demo@gmail.com",
    },
    {
      id: 3,
      icon: <CallRoundedIcon />,
      text: "03-0134024567-1",
      text2: "03-015488567-2",
    },
  ],
  social: [
    {
      id: 1,
      icon: <FaFacebookF />,
      title: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      title: "Linkedin",
      link: "https://www.Linkedin.com",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      title: "Twitter",
      link: "https://www.twitter.com",
    },
  ],
};

export default data;
