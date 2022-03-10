//import { Box, palette } from "@mui/system";
import { Box, Container, MenuItem } from "@mui/material";
//import Image from "../BazarImage";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../BazarButton";
import BazarMenu from "../BazarMenu";
import CallOutlined from "@mui/icons-material/CallOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FlexBox from "../FlexBox";
import MailOutline from "@mui/icons-material/MailOutline";
import { Span } from "../Typography";
// import TopbarStyle from "./TopbarStyle";
import TouchRipple from "@mui/material/ButtonBase";
import { signOut } from "../../redux/slice/authSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
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

  const signOut_user = async () => {
    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/", { replace: true });
    }
  };
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
          <Box className="logo" sx={{ mr: "1rem" }}>
            <Link to="/">
              <img
                height="45px"
                src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.png"
                alt="logo"
              />
            </Link>
          </Box>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="medium" />
            <Span style={{ marginLeft: "10px" }}>+(01) 416 900 2877</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="medium" />
            <Span style={{ marginLeft: "10px" }}>
              bowell.gemology@gmail.com
            </Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          {isAuthenticated ? (
            <BazarButton
              variant="contained"
              color="primary"
              sx={{}}
              onClick={signOut_user}
            >
              Logout
            </BazarButton>
          ) : (
            <>
              <Link className="link" to="/auth/login">
                Login/Register
              </Link>
            </>
          )}

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
