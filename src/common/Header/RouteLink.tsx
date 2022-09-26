import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function RouteLink({ children, to, ...props }: LinkProps) {
  const theme = useTheme();
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        style={{
          textDecoration: "none",
          color: match ? theme.palette.secondary.main : theme.extraColor.white,
          padding: " 0rem 1rem",
          fontWeight: match ? 600 : 600,
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}

export default RouteLink;
