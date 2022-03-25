import { Box, Container, MenuItem } from "@mui/material";
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
import TouchRipple from "@mui/material/ButtonBase";
import { signOut } from "../../redux/slice/authSlice";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const TopbarWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: 50,
  fontSize: 16,
  "& .topbarLeft": {
    "& .logo": {
      // display: "none",
      marginRight: "10px",
    },
    "& .title": {
      marginLeft: "10px",
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
    fontSize: 12,
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

  const [language, setLanguage] = useState(languageList[0]);
  const { t, i18n } = useTranslation();
  const handleLanguageClick = (lang) => () => {
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang.title);
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
        <FlexBox className="topbarLeft" alignItems="center">
          <div className="logo">
            <Link to="/">
              <img
                display="block"
                height="38px"
                src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.jpeg"
                alt="logo"
              />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+(01) 416 900 2877</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">bowell.gemology@gmail.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="" alignItems="center">
          {isAuthenticated ? (
            <>
              <BazarButton
                variant="contained"
                color="secondary"
                sx={{ mx: "1rem" }}
                component={Link}
                to="profile"
              >
                {t("description.Profile")}
              </BazarButton>
              <BazarButton
                variant="contained"
                color="primary"
                sx={{ mx: "1rem" }}
                onClick={signOut_user}
              >
                {t("description.Logout")}
              </BazarButton>
            </>
          ) : (
            <Box sx={{ mx: "2rem" }}>
              <Link className="link" to="/auth/login">
                {t("description.part1")}
              </Link>
            </Box>
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
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

const languageList = [
  {
    title: "en",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "中文",
    imgUrl: "/assets/images/flags/bd.png",
  },
];

export default Topbar;
