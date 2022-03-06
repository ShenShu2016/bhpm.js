import { Link } from "react-router-dom";
import React from "react"; // component props interface
import { Small } from "../Typography";

const NavLink2 = ({ url, title = "SHOP NOW" }) => {
  return url ? (
    <Link to={url}>
      <Small fontWeight="900" borderBottom={2} borderColor="primary.600">
        {title}
      </Small>
    </Link>
  ) : (
    <Small fontWeight="900" borderBottom={2} borderColor="primary.600">
      {title}
    </Small>
  );
};

export default NavLink2;
