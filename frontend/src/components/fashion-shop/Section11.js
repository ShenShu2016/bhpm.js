/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 15:33:20
 * @FilePath: \bhpmJS\frontend\src\components\fashion-shop\Section11.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";

import CategorySectionHeader from "../CategorySectionHeader";
import ProductCard1 from "../product-cards/ProductCard1";

const Section11 = ({ moreItems }) => {
  const itemPerPage = 8;
  const pageNumber = moreItems && Math.ceil(moreItems.length / itemPerPage);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Container
        sx={{
          mb: "70px",
        }}
      >
        <CategorySectionHeader title="More For You" seeMoreLink="#" />
        <Grid container spacing={3}>
          {moreItems
            .slice((page - 1) * itemPerPage, page * itemPerPage)
            .map((item, ind) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
                <ProductCard1 off={25} hoverEffect {...item} />
              </Grid>
            ))}
        </Grid>
        <Box sx={{ my: "2rem" }}>
          <Pagination
            count={pageNumber}
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default Section11;
