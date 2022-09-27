import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const CustomLink = ({ text, url }: { text: string; url: string }) => {
  const RouterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: ".875rem",
    fontWeight: 400,
    textDecoration: "underline",
    textDecorationColor: "rgba(35, 73, 87, 0.4)",
    "&:hover": {
      textDecorationColor: "rgba(35, 73, 87, 0.8)",
    },
  }));

  return (
    <>
      <RouterLink to={url}>{text}</RouterLink>
    </>
  );
};

export default CustomLink;
