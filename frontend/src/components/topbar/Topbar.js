//import { Box, palette } from "@mui/system";
import { Container, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";

import BazarMenu from "../BazarMenu";
import CallOutlined from "@mui/icons-material/CallOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FlexBox from "../FlexBox";
//import Image from "../BazarImage";
import { Link } from "react-router-dom";
import MailOutline from "@mui/icons-material/MailOutline";
import { Span } from "../Typography";
// import TopbarStyle from "./TopbarStyle";
import TouchRipple from "@mui/material/ButtonBase";
// import { layoutConstant } from "../../utils/constants";
import { styled } from "@mui/material/styles";

// import logowhite from '../../assets/images/logo-white.svg'
const TopbarWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: 50,
  fontSize: 16,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
      marginRight: "15px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .handler": {
    height: 50,
  },
  "& .menuTitle": {
    fontSize: 16,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
}));

const Topbar = () => {
  // const [currency, setCurrency] = useState(currencyList[0]);
  const [language, setLanguage] = useState(languageList[0]);

  // const handleCurrencyClick = (curr) => () => {
  //   setCurrency(curr);
  // };

  const handleLanguageClick = (lang) => () => {
    console.log(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);
  return (
    <TopbarWrapper>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <FlexBox alignItems="center">
          {/* <div className="logo">
            <Link href="/">
              <Image
                display="block"
                height="28px"
                src="/assets/images/logo-white.svg"
                alt="logo"
              />
            </Link>
          </div> */}

          <FlexBox alignItems="center">
            <CallOutlined fontSize="medium" />
            <Span style={{ marginLeft: "10px" }}>+(01) 416 123 456</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="medium" />
            <Span style={{ marginLeft: "10px" }}>support@bhpm.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <Link className="link" to="/faq">
            Login
          </Link>
          <Link className="link" to="/help">
            Register
          </Link>

          <BazarMenu
            handler={
              <TouchRipple className="handler marginRight">
                <Span className="menuTitle">{language.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleLanguageClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazarMenu>

          {/* <BazarMenu
            direction="right"
            handler={
              <TouchRipple className="handler">
                <Span className="menuTitle">{currency.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {currencyList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleCurrencyClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazarMenu> */}
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

const languageList = [
  {
    title: "EN",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "BN",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "HN",
    imgUrl: "/assets/images/flags/in.png",
  },
];
// const currencyList = [
//   {
//     title: "USD",
//     imgUrl: "/assets/images/flags/usa.png",
//   },
//   {
//     title: "EUR",
//     imgUrl: "/assets/images/flags/uk.png",
//   },
//   {
//     title: "BDT",
//     imgUrl: "/assets/images/flags/bd.png",
//   },
//   {
//     title: "INR",
//     imgUrl: "/assets/images/flags/in.png",
//   },
// ];
export default Topbar;
