import { Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
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
      <Box>
        <Pagination
          count={pageNumber}
          color="primary"
          sx={{ my: "2rem" }}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Container>
  );
};

export default Section11;
