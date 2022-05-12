/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-30 01:59:46
 * @FilePath: \bhpmJS\frontend\src\components\topbar\Topbar.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BazarButton from "../BazarButton";
import BazarMenu from "../BazarMenu";
import CallOutlined from "@mui/icons-material/CallOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FlexBox from "../FlexBox";
import MailOutline from "@mui/icons-material/MailOutline";
import { Span } from "../Typography";
import TouchRipple from "@mui/material/ButtonBase";
import { setLanguage } from "../../redux/slice/generalSlice";
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
  const languageState = useSelector((state) => state.general.language);
  const languageList = useSelector((state) => state.general.languageList);
  const { t, i18n } = useTranslation();
  const handleLanguageClick = (lang) => () => {
    console.log(lang);
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang.currentLanguage);
  };
  //console.log(languageState);

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);

  const signOut_user = async () => {
    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/", { replace: true });
      window.location.reload(false);
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
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                display="block"
                height="40px"
                src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/logo/bhpm_logo_black.jpg"
                alt="logo"
                style={{ borderRadius: "10px" }}
              />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+(01) 647 889 1680</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">info@bhpm.ca</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="" alignItems="center">
          {isAuthenticated ? (
            <>
              <BazarMenu
                handler={
                  <TouchRipple className="handler marginRight">
                    <AccountCircleIcon />
                    <Span className="menuTitle">
                      {t("description.Profile")}
                    </Span>
                    <ExpandMore fontSize="inherit" />
                  </TouchRipple>
                }
              >
                <MenuItem className="menuItem" component={Link} to="profile">
                  <Span className="menuTitle">Profile</Span>
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={Link}
                  to="profile/myFavorite"
                >
                  <Span className="menuTitle">My Favorites</Span>
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={Link}
                  to="auth/resetPassword"
                >
                  <Span className="menuTitle">Change Password</Span>
                </MenuItem>
                <MenuItem className="menuItem">
                  <BazarButton
                    variant="contained"
                    color="primary"
                    sx={{ mx: "1rem" }}
                    onClick={signOut_user}
                  >
                    {t("description.Logout")}
                  </BazarButton>
                </MenuItem>
              </BazarMenu>
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
                <Span className="menuTitle">{languageState.languageName}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.currentLanguage}
                onClick={handleLanguageClick(item)}
              >
                <Span className="menuTitle">{item.languageName}</Span>
              </MenuItem>
            ))}
          </BazarMenu>
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

export default Topbar;
