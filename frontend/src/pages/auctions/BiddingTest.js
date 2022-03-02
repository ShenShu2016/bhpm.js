import { API, graphqlOperation } from "aws-amplify";
import {
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchBidItemHistories,
  insertBidItemHistory,
  postBidItemHistory,
  selectAllBidItemHistories,
} from "../../redux/slice/bidItemHistorySlice";
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../../components/BazarButton";
import BidItemHistoriesRenderList from "./BidItemHistoriesRenderList";
import LotssRenderList from "./LotssRenderList";
import { onCreateBidItemHistory } from "../../graphql_custom/_subscriptions";
import { useParams } from "react-router-dom";

export default function BiddingTest() {
  const dispatch = useDispatch();
  const { auctionsID } = useParams();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });
  const handleAlertClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertStatus({ isOpen: false, isSuccess: null, sentence: null });
  };
  //console.log(isAuthenticated);

  const lotss = useSelector(selectAllLotss);

  useEffect(() => {
    if (isAuthenticated !== null && auctionsID) {
      dispatch(fetchLotss({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID]);
  //console.log("lotss", lotss);

  const bitItemHistories = useSelector(selectAllBidItemHistories);
  const { fetchBidItemHistoriesStatus } = useSelector(
    (state) => state.bidItemHistory
  );
  useEffect(() => {
    if (
      isAuthenticated !== null &&
      auctionsID &&
      fetchBidItemHistoriesStatus !== "succeeded"
    ) {
      dispatch(fetchBidItemHistories({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID, fetchBidItemHistoriesStatus]);
  //console.log("bitItemHistories", bitItemHistories);

  useEffect(() => {
    if (isAuthenticated !== null) {
      console.log("start subscription++++++");
      const subscription = API.graphql({
        query: onCreateBidItemHistory,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          console.log(value.data.onCreateBidItemHistory);
          dispatch(insertBidItemHistory(value.data.onCreateBidItemHistory));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        subscription.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);

  const handleBitClick = async () => {
    const createBidItemHistoryInput = {
      //id: "999",
      bidPrice: 100,
      auctionsID: auctionsID,
      lotsID: "b1b9732c-5172-4f14-9da8-cb99e73be2ea",
    };
    const response = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    console.log(response.meta.requestStatus);
    if (response.meta.requestStatus === "fulfilled") {
      setAlertStatus({ isOpen: true, isSuccess: true, sentence: "投标成功" });
    } else
      setAlertStatus({ isOpen: true, isSuccess: false, sentence: "投标失败" });
  };

  return (
    <>
      <Container>
        <BazarButton
          variant="contained"
          onClick={handleBitClick}
          color="primary"
          size="large"
          disabled={isAuthenticated !== true}
        >
          Bid
        </BazarButton>
      </Container>
      <BidItemHistoriesRenderList bitItemHistories={bitItemHistories} />
      {/* <LotssRenderList lotss={lotss} /> */}

      {/* {lotssRenderList} */}
      {/* <Box sx={{ height: "600px", textAlign: "center" }}>
        <CircularProgress color="inherit" sx={{ mt: "300px" }} />
      </Box> */}
      <Snackbar
        //   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        //{isOpen:true,isSuccess:true,sentence:'投标成功'}
        open={alertStatus.isOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertStatus.isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {alertStatus.sentence}
        </Alert>
      </Snackbar>
    </>
  );
}
