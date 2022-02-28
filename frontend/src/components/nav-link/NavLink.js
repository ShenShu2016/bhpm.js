import { Link, useLocation } from "react-router-dom";

import React from "react"; // component props interface
import clsx from "clsx";
import { styled } from "@mui/material";

// styled component
const StyledLink = styled("a")(({ theme, active_route }) => ({
  position: "relative",
  color: active_route === "active" ? theme.palette.primary.main : "inherit",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`,
  },
}));

const NavLink = ({ href, children, style, className, ...props }) => {
  // const { pathname } = useRouter();
  const location = useLocation();
  const { pathname } = location;
  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  }; // active route

  const currentRoute = checkRouteMatch();
  return (
    <Link to={href}>
      <StyledLink
        active_route={currentRoute ? "active" : ""}
        className={clsx(className)}
        to={href}
        style={style}
        {...props}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

export default NavLink;
