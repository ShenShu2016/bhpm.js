import { Link } from "react-router-dom";
import React from "react"; // component props interface
import clsx from "clsx";
import { styled } from "@mui/material";

// styled component
const StyledLink = styled("div")(({ theme, active_route }) => ({
  position: "relative",
  color: active_route === "active" ? theme.palette.primary.main : "inherit",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`,
  },
}));

const NavLink = ({ href, children, style, className, ...props }) => {
  return (
    <Link to={href}>
      <StyledLink className={clsx(className)} style={style} {...props}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default NavLink;
