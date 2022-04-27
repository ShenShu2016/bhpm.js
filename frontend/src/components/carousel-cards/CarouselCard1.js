/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:57:24
 * @FilePath: \bhpmJS\frontend\src\components\carousel-cards\CarouselCard1.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Button, Grid, styled } from "@mui/material";

import BazarImage from "../BazarImage";
import { Link } from "react-router-dom";
import { Paragraph } from "../Typography";
import React from "react"; // component props interface

// styled component
const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".title": {
    fontSize: 50,
    marginTop: 0,
    marginBottom: "1.35rem",
    lineHeight: 1.2,
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down("xs")]: {
    ".title": {
      fontSize: 16,
    },
    ".title + *": {
      fontSize: 13,
    },
    ".button-link": {
      height: 36,
      padding: "0 1.5rem",
      fontSize: 13,
    },
  },
}));

export default function CarouselCard1({ carousel }) {
  const {
    title,
    description,
    sourceUrl,
    imgUrl,
    homePageCarouseAuctionId,
    sourceType,
  } = carousel;

  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 className="title">{title}</h1>
          <Paragraph color="secondary.main" mb={2.7}>
            {description}
          </Paragraph>
          <Button
            className="button-link"
            variant="contained"
            color="primary"
            sx={{
              px: "1.75rem",
              height: "44px",
              borderRadius: "8px",
            }}
            component={Link}
            to={`/auction/bidding/${homePageCarouseAuctionId}`}
          >
            Bid Now
          </Button>
        </Grid>
        <Grid item sm={5} xs={12}>
          {sourceType === "video" ? (
            <video
              src={sourceUrl}
              type="video/mp4"
              controls
              style={{
                display: "block",
                mx: "auto",
                maxHeight: 400,
                maxWidth: "100%",
              }}
            />
          ) : (
            <BazarImage
              src={sourceUrl}
              alt={title}
              sx={{
                display: "block",
                mx: "auto",
                maxHeight: 400,
                maxWidth: "100%",
                cursor: "pointer",
              }}
              onClick={() => window.open(imgUrl)}
            />
          )}
        </Grid>
      </Grid>
    </StyledBox>
  );
}
