import React, { useEffect } from "react";
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function BiddingTest() {
  const dispatch = useDispatch();
  const { auctionsID } = useParams();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  console.log(isAuthenticated);

  const lotss = useSelector(selectAllLotss);

  useEffect(() => {
    if (isAuthenticated !== null && auctionsID) {
      dispatch(fetchLotss({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID]);
  return (
    <div>
      {lotss &&
        lotss.map((lotItem) => {
          return (
            <>
              <Typography variant="h5">lot number: {lotItem.lot}</Typography>
              <Typography variant="body1">
                startingPrice: {lotItem.startingPrice}
              </Typography>
              <Typography variant="body1">
                estimatedPriceMin: {lotItem.estimatedPriceMin}
              </Typography>
              <Typography variant="body1">
                estimatedPriceMax: {lotItem.estimatedPriceMax}
              </Typography>
              <Typography variant="body1">status: {lotItem.status}</Typography>
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
              </Typography>
              <img
                src={lotItem.auctionItem.imgUrl}
                alt={lotItem.auctionItem.name}
              />
            </>
          );
        })}
    </div>
  );
}
