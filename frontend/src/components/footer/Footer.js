/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 16:01:16
 * @FilePath: \bhpmJS\frontend\src\components\footer\Footer.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, Grid, styled } from "@mui/material";

import BazarIconButton from "../BazarIconButton";
import Facebook from "../icons/Facebook";
import FlexBox from "../FlexBox";
import Google from "../icons/Google";
import Instagram from "../icons/Instagram";
import { Link } from "react-router-dom";
import React from "react";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";
import { useTranslation } from "react-i18next";

const StyledLink = styled("div")(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  cursor: "pointer",
  borderRadius: 4,
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <Box bgcolor="#0c0e30">
        <Container sx={{ p: "1rem", color: "white" }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link to="/">
                  <img
                    height="200px"
                    src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.jpeg"
                    alt="logo"
                    style={{ borderRadius: "10px" }}
                  />
                </Link>
              </Grid>
              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  About Us
                </Box>

                <div>
                  <Link to="about_us">
                    <StyledLink>{`${t("description.寶華介紹")}`}</StyledLink>
                  </Link>
                  <Link to="teams">
                    <StyledLink>{`${t("description.團隊介紹")}`}</StyledLink>
                  </Link>
                  <Link to="services">
                    <StyledLink>{`${t("description.服務項目")}`}</StyledLink>
                  </Link>
                  <Link to="rules">
                    <StyledLink>{`${t("description.服務規則")}`}</StyledLink>
                  </Link>
                  <Link to="privacy">
                    <StyledLink>{`${t("description.隱私條款")}`}</StyledLink>
                  </Link>
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Customer Care
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <StyledLink key={ind}>{item}</StyledLink>
                  ))}
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Contact Us
                </Box>
                <Box py={0.6} color="grey.500">
                  160 E Beaver Creek Rd, Unit18, Richmond Hill, Ontario. Canada
                </Box>
                <Box py={0.6} color="grey.500">
                  Email: info@bhpm.ca
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone: 416-900-2877
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <Link
                      to={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <BazarIconButton
                        m={0.5}
                        bgcolor="rgba(0,0,0,0.2)"
                        fontSize="12px"
                        padding="10px"
                      >
                        <item.icon fontSize="inherit" />
                      </BazarIconButton>
                    </Link>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const customerCareLinks = [
  "How to register",
  "Consignment",
  "How to buy",
  "Terms & Conditions",
  "Contact us",
];

const iconList = [
  { icon: Facebook, url: "/" },
  { icon: Twitter, url: "/" },
  {
    icon: Youtube,
    url: "/",
  },
  { icon: Google, url: "/" },
  { icon: Instagram, url: "/" },
];

export default Footer;
