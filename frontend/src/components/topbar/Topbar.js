/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 14:59:05
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
    i18n.changeLanguage(lang.title);
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
                src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.jpeg"
                alt="logo"
                style={{ borderRadius: "10px" }}
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
                  to="profile/myCollection"
                >
                  <Span className="menuTitle">My Collection</Span>
                </MenuItem>
                <MenuItem className="menuItem">
                  <BazarButton
                    variant="contained"
                    color="primary"
                    sx={{ mx: "1rem" }}
                    onClick={signOut_user}
                  >
                    {t("description.Logout")}
                  </BazarButton>{" "}
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
                <Span className="menuTitle">{languageState.title}</Span>
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

export default Topbar;
