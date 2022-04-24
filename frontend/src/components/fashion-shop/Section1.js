/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 16:35:42
 * @FilePath: \bhpmJS\frontend\src\components\fashion-shop\Section1.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container } from "@mui/material";
import React, { Fragment } from "react";

import Carousel from "../carousel/Carousel";
import CarouselCard1 from "../carousel-cards/CarouselCard1";
import Navbar from "../navbar/Navbar";
import { selectAllHomePageCarouses } from "../../redux/slice/homePageCarouseSlice";
import { useSelector } from "react-redux";

const Section1 = () => {
  const carouselData = useSelector(selectAllHomePageCarouses);

  return (
    <Fragment>
      <Navbar />
      <Box bgcolor="white" mb={7.5}>
        <Container sx={{ py: "2rem" }}>
          <Carousel
            totalSlides={carouselData?.length}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={true}
            spacing="0px"
          >
            {carouselData &&
              carouselData.map((data, ind) => (
                <CarouselCard1 carousel={data} key={ind} />
              ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
