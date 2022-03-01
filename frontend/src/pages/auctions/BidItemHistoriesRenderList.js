import { Box, Container, Typography } from "@mui/material";

import React from "react";

export default function BidItemHistoriesRenderList({ bitItemHistories }) {
  return (
    <div>
      <Container
        sx={{
          borderStyle: "solid",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        {bitItemHistories &&
          bitItemHistories.map((history) => {
            return (
              <Box sx={{ width: "400px" }} key={history.id}>
                <Typography variant="h5" sx={{ whiteSpace: "pre-wrap" }}>
                  history ID: {history.id}
                </Typography>
                <Typography variant="body1">
                  {JSON.stringify(history, 1, 2)}
                </Typography>
                {/* </Typography> */}
                {/* <Typography variant="body1">
                    startingPrice: {lotItem.startingPrice}
                  </Typography>
                  <Typography variant="body1">
                    estimatedPriceMin: {lotItem.estimatedPriceMin}
                  </Typography>
                  <Typography variant="body1">
                    estimatedPriceMax: {lotItem.estimatedPriceMax}
                  </Typography>
                  <Typography variant="body1">
                    status: {lotItem.lotsStatus}
                  </Typography>
                  <Typography variant="body1">
                    name: {lotItem.auctionItem.name}
                  </Typography>
                  <Typography variant="body1">
                    title: {lotItem.auctionItem.title}
                  </Typography>
                  <Typography variant="body1">
                    description: {lotItem.auctionItem.description}
                  </Typography>
                  <Typography variant="body1">
                    categoryID: {lotItem.auctionItem.categoryID}
                  </Typography>  */}
              </Box>
            );
          })}
      </Container>
    </div>
  );
}
