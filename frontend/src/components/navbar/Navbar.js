import { Box, Container, MenuItem, styled } from "@mui/material";

import ArrowRight from "@mui/icons-material/ArrowRight";
import BazarCard from "../BazarCard";
import FlexBox from "../FlexBox";
import NavLink from "../nav-link/NavLink";
import React from "react"; // component props interface
import navbarNavigations from "../../data/navbarNavigations";

//import BazarButton from "../BazarButton";






// import Category from "../icons/Category";
// import CategoryMenu from "../categories/CategoryMenu";
// import ChevronRight from "@mui/icons-material/ChevronRight";

//import { Paragraph } from "../Typography";

// const common css style
const navLinkStyle = {
  cursor: "pointer",
  marginRight: "2rem",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: "0",
  },
}; // style components

const StyledNavLink = styled(NavLink)(() => ({ ...navLinkStyle }));
const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": {
      display: "block",
    },
  },
}));
const ParentNavItem = styled(Box)(() => ({
  display: "none",
  position: "absolute",
  top: 0,
  left: "100%",
  zIndex: 5,
}));
const NavBarWrapper = styled(BazarCard)(({ theme }) => ({
  display: "block",
  position: "relative",
  height: "140px",
  borderRadius: "2px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const InnerContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));
// const CategoryMenuButton = styled(BazarButton)(({ theme }) => ({
//   width: "278px",
//   height: "40px",
//   px: "1rem",
//   backgroundColor: theme.palette.grey[100],
// }));

const Navbar = ({ navListOpen, hideCategories }) => {
  const renderNestedNav = (list, isRoot = false) => {
    return list?.map((nav) => {
      if (isRoot) {
        if (nav.url && nav.extLink)
          return (
            <StyledNavLink
              href={nav.url}
              key={nav.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nav.title}
            </StyledNavLink>
          );
        else if (nav.url)
          return (
            <StyledNavLink
              href={nav.url}
              key={nav.title}
              sx={{ fontSize: 25, pr: "2rem" }}
            >
              {nav.title}
            </StyledNavLink>
          );
        if (nav.child)
          return (
            <FlexBox
              position="relative"
              flexDirection="column"
              alignItems="center"
              key={nav.title}
              sx={{
                fontSize: 25,
                // ml: "3rem",
                "&:hover": {
                  "& > .child-nav-item": {
                    display: "block",
                  },
                },
              }}
            >
              <Box sx={navLinkStyle}>{nav.title}</Box>
              <Box
                className="child-nav-item"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  top: "100%",
                  zIndex: 5,
                }}
              >
                <BazarCard
                  sx={{
                    mt: "1.25rem",
                    py: "0.5rem",
                    minWidth: "230px",
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </Box>
            </FlexBox>
          );
      } else {
        if (nav.url)
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        if (nav.child)
          return (
            <ParentNav position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span">
                  {nav.title}
                </Box>
                <ArrowRight fontSize="small" />
              </MenuItem>
              <ParentNavItem className="parent-nav-item" pl={1}>
                <BazarCard
                  sx={{
                    py: "0.5rem",
                    minWidth: "230px",
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ParentNavItem>
            </ParentNav>
          );
      }
    });
  };

  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      {!hideCategories ? (
        <InnerContainer
          sx={{
            justifyContent: "left",
          }}
        >
          {/* <CategoryMenu open={navListOpen}>
            <CategoryMenuButton variant="text">
              <Category fontSize="small" />
              <Paragraph
                fontWeight="600"
                textAlign="left"
                flex="1 1 0"
                ml={1.25}
                color="grey.600"
              >
                Categories
              </Paragraph>
              <ChevronRight className="dropdown-icon" fontSize="small" />
            </CategoryMenuButton>
          </CategoryMenu> */}
          <Box sx={{ mr: "15rem" }}>
            <img
              height={130}
              src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.jpeg"
              alt="logo"
            />
          </Box>
          <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      ) : (
        <InnerContainer
          sx={{
            justifyContent: "left",
          }}
        >
          <img
            height={130}
            src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.jpeg"
            alt="logo"
          />
          <FlexBox sx={{ fontSize: 25 }}>
            {renderNestedNav(navbarNavigations, true)}
          </FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
};

export default Navbar;
