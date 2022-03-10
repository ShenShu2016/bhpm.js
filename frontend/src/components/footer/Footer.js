import { Box, Container, Grid, styled } from "@mui/material";

import AppStore from "../AppStore";
import BazarIconButton from "../BazarIconButton";
import Facebook from "../icons/Facebook";
import FlexBox from "../FlexBox";
import Google from "../icons/Google";
//import Image from "../BazarImage";
import Instagram from "../icons/Instagram";
import { Link } from "react-router-dom";
import { Paragraph } from "../Typography";
import React from "react";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";

// styled component
const StyledLink = styled("a")(({ theme }) => ({
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
  return (
    <footer>
      <Box bgcolor="#0c0e30">
        <Container sx={{ p: "1rem", color: "white" }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Paragraph mb={2.5} color="grey.500">
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet. */}
                </Paragraph>

                {/* <AppStore /> */}
                <Link to="/">
                  <img
                    height="200px"
                    src="https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/logo-black.png"
                    alt="logo"
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
                  {aboutLinks.map((item, ind) => (
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
                  Email: bowell.gemology@gmail.com
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone: 416-900-2877
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
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
                    </a>
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

const aboutLinks = ["宝华介绍", "团队介绍", "服务项目", "服务规则", "隐私条款"];

const customerCareLinks = [
  "How to register",
  "Consignment",
  "How to buy",
  "Terms & Conditions",
  "Contact us",
];

const iconList = [
  { icon: Facebook, url: "https://www.facebook.com/UILibOfficial" },
  { icon: Twitter, url: "https://twitter.com/uilibofficial" },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  { icon: Google, url: "/" },
  { icon: Instagram, url: "https://www.instagram.com/uilibofficial/" },
];

export default Footer;
