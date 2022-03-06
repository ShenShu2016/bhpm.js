import React, { Fragment } from "react";

import { Box } from "@mui/system";
import Carousel from "../carousel/Carousel";
import CarouselCard1 from "../carousel-cards/CarouselCard1";
import { Container } from "@mui/material";

// import CreditCardVerifiedIcon from "../../components/icons/CreditCardVerified";
// import FeedbackThumbsUpIcon from "../../components/icons/FeedbackThumbsUp";
// import Navbar from "../../components/navbar/Navbar";
// import ShowcaseCard1 from "./showcase-cards/ShowcaseCard1";
// import ShowcaseCard2 from "./showcase-cards/ShowcaseCard2";
// import ShowcaseCard3 from "./showcase-cards/ShowcaseCard3";
// import ShowcaseCard4 from "./showcase-cards/ShowcaseCard4";
// import ShowcaseCard5 from "./showcase-cards/ShowcaseCard5";
// import Spacer from "../../components/Spacer";

const Section1 = ({ carouselData }) => {
  console.log(carouselData, carouselData);
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Box bgcolor="white" mb={7.5}>
        <Container sx={{ py: "2rem" }}>
          <Carousel
            totalSlides={5}
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
      {/* <Container
        sx={{
          pt: "3rem",
          mb: "4rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={4} md={5} xs={12}>
            <ShowcaseCard1 />
          </Grid>

          <Grid item lg={8} md={7} xs={12}>
            <ShowcaseCard2 />
            <Spacer mt="1.5rem" />
            <ShowcaseCard3 />
          </Grid>
        </Grid>

        <Spacer mb="1.5rem" />

        <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
            <ShowcaseCard4
              Icon={CreditCardVerifiedIcon}
              title="Secure Payment"
              body="100% secured payment & privacy"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <ShowcaseCard4
              Icon={FeedbackThumbsUpIcon}
              title="Great Feedback"
              body="More than 97% positive & happy customers"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard5 />
          </Grid>
        </Grid>
      </Container> */}
    </Fragment>
  );
};

export default Section1;
