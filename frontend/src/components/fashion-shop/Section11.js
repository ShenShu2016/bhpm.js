/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-08-31 15:22:47
 * @FilePath: /bhpmJS/frontend/src/components/fashion-shop/Section11.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, Grid, Pagination } from "@mui/material";
import React, { useState, useRef } from "react";

import CategorySectionHeader from "../CategorySectionHeader";
import ProductCard1 from "../product-cards/ProductCard1";
import { selectAllLots } from "../../redux/slice/lotSlice";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

const Section11 = () => {
  const myRef = useRef(null);
  const lots = useSelector(selectAllLots);
  const itemPerPage = 32;
  const pageNumber = lots && Math.ceil(lots.length / itemPerPage);
  const executeScroll = () => myRef.current.scrollIntoView();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    executeScroll();
  };

  return (
    <>
      <Container
        sx={{
          mb: "70px",
        }}
      >
        <div ref={myRef}>
          <CategorySectionHeader title='More For You' seeMoreLink='#' />
        </div>
        <Grid container spacing={3}>
          {lots &&
            lots
              .slice((page - 1) * itemPerPage, page * itemPerPage)
              .map((item, ind) => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
                  <ProductCard1 off={25} hoverEffect item={item} />
                </Grid>
              ))}
        </Grid>
        <Box sx={{ my: "2rem" }}>
          <Pagination
            count={pageNumber}
            color='primary'
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default trackWindowScroll(Section11);
