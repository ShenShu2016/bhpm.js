import React, { Fragment } from "react";

import { Box } from "@mui/system";
import Carousel from "../carousel/Carousel";
import CarouselCard1 from "../carousel-cards/CarouselCard1";
import { Container } from "@mui/material";
import Navbar from "../navbar/Navbar";

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
      <Navbar />
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
    </Fragment>
  );
};

export default Section1;
