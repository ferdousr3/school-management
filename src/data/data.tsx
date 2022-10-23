import Logo from "../assets/logo/logo.png";
import Logo2 from "../assets/logo/logo2.png";
import Banner from "../assets/hero/banner.jpg";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AlbumIcon from "@mui/icons-material/Album";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const data = {
  schoolDetails: {
    name: "GreekCode",
    shortName: "GreekCode",
    address: "Online Courses",
  },
  logoImage: Logo,
  logoImage2: Logo2,
  phoneNumber: "03-0134024567-1",
  address: "Street 21 York E Block 2101 France USA",
  navItems: [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/contact" },
  ],
  heroBanner: Banner,
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
      place: " Street 21 York  France USA",
      status: "coming Soon",
    },
    {
      id: 2,
      name: "100 year pass School -2022 ",
      day: 25,
      month: "dec",
      time: "10:00  - 12:10 ",
      organizer: "School Comity",
      place: " Street 21 York  France USA",
      status: "coming Soon",
    },
    {
      id: 3,
      name: "100 year pass celebrating -2022 ",
      day: 25,
      month: "dec",
      time: "12:30 - 16:00  ",
      organizer: "School Comity",
      place: " Street 21 York  France USA",
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
  dashboard: [
    {
      id: 1,
      text: "Profile",
      icon: <PersonIcon />,
      path: "",
    },
    {
      id: 2,
      text: "banking",
      icon: <AccountBalanceIcon />,
      path: "banking",
    },
    {
      id: 3,
      text: "users",
      icon: <PeopleAltIcon />,
      path: "allUsers",
    },
  ],
};

export default data;
