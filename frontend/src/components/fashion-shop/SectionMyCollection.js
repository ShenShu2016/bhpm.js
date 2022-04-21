import { Container, Grid } from "@mui/material";

import CategorySectionHeader from "../CategorySectionHeader";
import ProductCard1 from "../product-cards/ProductCard1";
import React from "react";
import { H3 } from "../Typography";
import { Link } from "react-router-dom";
const SectionMyCollection = ({ moreItems }) => {
  console.log(moreItems);
  return (
    <Container
      sx={{
        mt: "35px",
        mb: "70px",
      }}
    >
      <CategorySectionHeader title="Your Collections" />
      {(moreItems.length !== 0) ? (
        <Grid container spacing={3}>
          {moreItems.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <ProductCard1 off={25} hoverEffect {...item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Link to={`/`} >
        <H3
          className="title"
          fontSize="16px"
          textAlign="left"
          fontWeight="600"
          color="secondary.main"
          mb={1}
          mt={1}
        >
  
          Empty! Go to collect your favorites!
        </H3>
        
      </Link>
      )}
    </Container>
  );
};

export default SectionMyCollection;
