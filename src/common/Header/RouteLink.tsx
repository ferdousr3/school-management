import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { styled } from "@mui/material";

function RouteLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const RouterLink = styled(Link)(({ theme }) => ({
    color: match ? theme.palette.secondary.main : theme.extraColor.white,
    fontSize: "1rem",
    fontWeight: 700,
    textDecoration: "none",
    textDecorationColor: "rgba(35, 73, 87, 0.4)",
    padding: " 0rem 1rem",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: theme.transitions.create(["color", "hover"]),
    },
  }));

  return (
    <>
      <RouterLink to={to} {...props}>
        {children}
      </RouterLink>
    </>
  );
}

export default RouteLink;

