import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

export default function BidItemHistoriesRenderList({ bitItemHistories }) {
  const { username } = useSelector((state) => state.userAuth.user);
  //console.log(username);
  return (
    <div>
      <Stack
        spacing={3}
        sx={{
          // borderStyle: "solid",
          // display: "flex",
          // flexWrap: "wrap",
          margin: "auto",
          textAlign: "center",
        }}
      >
        {bitItemHistories &&
          bitItemHistories.map((history) => {
            //console.log(history.owner);
            //console.log(history.lots.auctionItem.imgUrl);
            return (
              <Box sx={{ width: "200px" }} key={history.id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    {/* <CardMedia
                      component="img"
                      // sx={{ maxHeight: "100" }}
                      image={history.lots.auctionItem.imgUrl}
                      alt="Paella dish"
                    /> */}
                    {/* <Typography variant="h5" color="primary"> */}
                    Live ${history.bidPrice} :
                    {history.owner === null ? "现场" : "Internet"}
                    {/* </Typography> */}
                    {history.owner === username && "You"}
                    <Typography variant="body1">
                      {moment(history.createdAt).fromNow()}
                    </Typography>
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
