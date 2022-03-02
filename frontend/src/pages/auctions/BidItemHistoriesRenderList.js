import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";

export default function BidItemHistoriesRenderList({ bitItemHistories }) {
  const { username } = useSelector((state) => state.userAuth.user);
  console.log(username);
  return (
    <div>
      <Stack
        spacing={2}
        sx={{
          borderStyle: "solid",
          // display: "flex",
          // flexWrap: "wrap",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        {bitItemHistories &&
          bitItemHistories.map((history) => {
            //console.log(history.owner);
            return (
              <Box sx={{ width: "200px" }} key={history.id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" color="primary">
                      Live ${history.bidPrice} :
                      {history.owner === null ? "现场" : "Internet"}
                    </Typography>
                    {history.owner === username && "You"}
                  </CardContent>
                </Card>
                {/* <Typography variant="h5" sx={{ whiteSpace: "pre-wrap" }}>
                  history ID: {history.id}
                </Typography>
                <Typography variant="body1">
                  {JSON.stringify(history, 1, 2)}
                </Typography> */}
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
      </Stack>
    </div>
  );
}
