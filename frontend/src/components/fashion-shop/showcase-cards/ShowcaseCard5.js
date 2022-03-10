import { Grid, styled } from "@mui/material";
import { H1, Paragraph, Span } from "../../Typography";

import BazarImage from "../../BazarImage";
import { Link } from "react-router-dom";
import React from "react"; // styled component
import { alpha } from "@mui/system";

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderRadius: 4,
  boxShadow: theme.shadows[4],
  alignItems: "center",
  height: "100%",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
}));

const ShowcaseCard5 = () => {
  return (
    <Link to="/home-3">
      <StyledGrid container>
        <Grid item xs={7} p="2rem">
          <Paragraph color="grey.600" mb="0.5rem">
            SPECIAL OFFER
          </Paragraph>
          <H1 lineHeight={1.3}>
            <Span color="primary.600" lineHeight={1.3}>
              $100 Off
            </Span>{" "}
            Over $1200
          </H1>

          <Paragraph color="grey.600" mt="0.5rem">
            Handcrafted from genuine Italian. One inner compartment
          </Paragraph>
        </Grid>

        <Grid item xs={5}>
          <BazarImage
            src="/assets/images/products/paper-bag.png"
            alt="apple-watch-1"
            sx={{
              mx: "auto",
              maxHeight: "200px",
            }}
          />
        </Grid>
      </StyledGrid>
    </Link>
  );
};

export default ShowcaseCard5;
