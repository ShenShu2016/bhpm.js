import "react-image-gallery/styles/css/image-gallery.css";
import "./slideCSS.css";

import {
  Alert,
  Box,
  Container,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchBidItemHistories,
  insertBidItemHistory,
  postBidItemHistory,
  selectAllBidItemHistories,
  selectMaxBidPriceByCurrentLot,
} from "../../redux/slice/bidItemHistorySlice";
import {
  fetchLotss,
  selectLotByInProgress,
  updateLotsDetailBySub,
} from "../../redux/slice/lotsSlice";
import {
  selectAuctionsById,
  selectedAuctions,
} from "../../redux/slice/auctionsSlice";
import { useDispatch, useSelector } from "react-redux";

import { API } from "aws-amplify";
import AdminTable from "./AdminTable";
import BazarButton from "../../components/BazarButton";
import BidItemHistoriesRenderList from "./BidItemHistoriesRenderList";
import ImageGallery from "react-image-gallery";
import { onCreateBidItemHistory } from "../../graphql_custom/_subscriptions";
import { onUpdateLots } from "../../graphql/subscriptions";
import { useParams } from "react-router-dom";

export default function BiddingTest() {
  const dispatch = useDispatch();
  const { auctionsID } = useParams();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  console.log(cognitoGroup);
  const bitItemHistories = useSelector(selectAllBidItemHistories);
  const { fetchBidItemHistoriesStatus } = useSelector(
    (state) => state.bidItemHistory
  );
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [bitItemHistories]);
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });
  //console.log("alertStatus", alertStatus);
  const handleAlertClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertStatus({ ...alertStatus, isOpen: false });
  };
  //console.log(isAuthenticated);

  //const lotss = useSelector(selectAllLotss);
  const lotInProgress = useSelector(selectLotByInProgress());
  console.log("lotInProgress", lotInProgress);

  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotID: lotInProgress.length === 1 && lotInProgress[0].id,
    })
  );
  console.log("maxBidPriceByCurrentLot", maxBidPriceByCurrentLot);
  useEffect(() => {
    if (isAuthenticated !== null && auctionsID) {
      dispatch(selectedAuctions({ isAuthenticated, auctionsID }));
      dispatch(fetchLotss({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID]);
  //console.log("lotss", lotss);
  const auction = useSelector((state) => selectAuctionsById(state, auctionsID));
  //console.log("auction", auction);
  //console.log(auction && auction.bidIncrementPriceList);

  const nextBid =
    auction &&
    maxBidPriceByCurrentLot &&
    Math.min(
      ...auction.bidIncrementPriceList.filter(
        (x) => x > maxBidPriceByCurrentLot.bidPrice
      )
    );

  //   auction.bidIncrementPriceList.sort((a, b) => a - b);
  console.log("nextBid", nextBid);

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
      const onCreateBidItemHistorySub = API.graphql({
        query: onCreateBidItemHistory,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          console.log(value);
          dispatch(insertBidItemHistory(value.data.onCreateBidItemHistory));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onCreateBidItemHistorySub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated !== null) {
      console.log("start update lots subscription++++++");
      const onUpdateLotsSub = API.graphql({
        query: onUpdateLots,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          console.log(value);
          dispatch(updateLotsDetailBySub(value.data.onUpdateLots));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onUpdateLotsSub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);

  const handleBitClick = async () => {
    const createBidItemHistoryInput = {
      id:
        lotInProgress.length === 1 &&
        `${lotInProgress[0].id}-${
          nextBid ? nextBid : lotInProgress[0].startingPrice
        }`,
      bidPrice: nextBid ? nextBid : lotInProgress[0].startingPrice,
      auctionsID: auctionsID,
      lotsID: lotInProgress.length === 1 && lotInProgress[0].id,
      bidForm: "Internet",
    };
    const response = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    //console.log(response.meta.requestStatus);
    if (response.meta.requestStatus === "fulfilled") {
      setAlertStatus({ isOpen: true, isSuccess: true, sentence: "投标成功" });
    } else
      setAlertStatus({ isOpen: true, isSuccess: false, sentence: "投标失败" });
  };

  // console.log("imgUrls", lotInProgress[0].auctionItem.imgUrls);

  const imgListInProgress =
    lotInProgress.length === 1 &&
    lotInProgress[0].auctionItem.imgUrls.map((url) => {
      return { original: url, thumbnail: url };
    });
  console.log(imgListInProgress);
  return (
    <>
      {/* <AdminLotsGrid /> */}
      <Grid container spacing={2} sx={{ my: "2rem", p: "1rem" }}>
        <Grid item xs={9}>
          {lotInProgress.length === 1 ? (
            <Box>
              <ImageGallery
                showFullscreenButton={true}
                showPlayButton={false}
                showIndex={true}
                startIndex={0}
                thumbnailPosition={"left"}
                items={imgListInProgress}
                originalHeight={"500px"}
                thumbnailHeight={"500px"}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h3">
                  Next Bid is:
                  {nextBid ? nextBid : lotInProgress[0].startingPrice}
                </Typography>
                <BazarButton
                  variant="contained"
                  onClick={handleBitClick}
                  color="primary"
                  size="large"
                  fullWidth={true}
                  disabled={isAuthenticated !== true}
                >
                  Bid
                </BazarButton>
              </Box>
            </Box>
          ) : (
            <Typography variant="h3">Waiting For admin to start</Typography>
          )}
        </Grid>
        <Grid item xs={3}>
          <Container sx={{ maxHeight: "500px", overflow: "auto" }}>
            <div ref={messageRef}>
              <BidItemHistoriesRenderList bitItemHistories={bitItemHistories} />
            </div>
          </Container>
        </Grid>
      </Grid>
      {cognitoGroup.includes("admin") && <AdminTable />}

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
