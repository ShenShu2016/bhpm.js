import { API, graphqlOperation } from "aws-amplify";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchBidItemHistories,
  postBidItemHistory,
  selectAllBidItemHistories,
} from "../../redux/slice/bidItemHistorySlice";
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import BidItemHistoriesRenderList from "./BidItemHistoriesRenderList";
import LotssRenderList from "./LotssRenderList";
import { onCreateBidItemHistory } from "../../graphql/subscriptions";
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
  //console.log("lotss", lotss);

  const bitItemHistories = useSelector(selectAllBidItemHistories);

  useEffect(() => {
    if (isAuthenticated !== null && auctionsID) {
      dispatch(fetchBidItemHistories({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID]);
  console.log("bitItemHistories", bitItemHistories);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateBidItemHistory)
    ).subscribe({
      next: ({ value }) => console.log(value),
      error: (error) => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleBitClick = () => {
    const createBidItemHistoryInput = {
      bidPrice: 100,
      auctionsID: auctionsID,
      lotsID: "b1b9732c-5172-4f14-9da8-cb99e73be2ea",
    };
    dispatch(postBidItemHistory({ createBidItemHistoryInput }));
  };

  return (
    <>
      <Button variant="contained" onClick={handleBitClick}>
        Bid
      </Button>
      <BidItemHistoriesRenderList bitItemHistories={bitItemHistories} />
      {/* <LotssRenderList lotss={lotss} /> */}

      {/* {lotssRenderList} */}
      {/* <Box sx={{ height: "600px", textAlign: "center" }}>
        <CircularProgress color="inherit" sx={{ mt: "300px" }} />
      </Box> */}
    </>
  );
}
