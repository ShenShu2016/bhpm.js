/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 10:43:11
 * @FilePath: \bhpmJS\frontend\src\pages\auctions\bidding\Bidding.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "react-image-gallery/styles/css/image-gallery.css";
import "./slideCSS.css";

import { Alert, Box, CircularProgress, Paper, Snackbar } from "@mui/material";
import { H1, H2, H3 } from "../../../components/Typography";
import {
  HistoryList,
  LeftImgList,
  TextPaper,
  TextPaperContainer,
} from "./BiddingStyled";
import React, { useEffect, useState } from "react";
import {
  fetchBidHistories,
  postBidHistory,
  selectAllBidHistories,
  selectMaxBidPriceByCurrentLot,
} from "../../../redux/slice/bidHistorySlice";
import {
  fetchLots,
  selectAllLots,
  selectLotByInProgress,
} from "../../../redux/slice/lotSlice";
import {
  selectAuctionById,
  selectedAuction,
} from "../../../redux/slice/auctionSlice";
import { useDispatch, useSelector } from "react-redux";

import AdminActions from "../../../components/bidding/AdminActions";
import AdminTable from "../../../components/bidding/AdminTable";
import BazarButton from "../../../components/BazarButton";
import BidHistoriesRenderList from "../../../components/bidding/BidHistoriesRenderList";
import BiddingTitle from "../../../components/bidding/BiddingTitle";
import ImageGallery from "react-image-gallery";
import ImageList from "../../../components/ImageList";
import Loading from "../../../components/Loading";
import { fetchAuctionUserLimitations } from "../../../redux/slice/auctionUserLimitationSlice";
import { fetchMySucceedBids } from "../../../redux/slice/mySucceedBidSlice";
import { green } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import useSubscriptions from "./useSubscriptions";

function getNextBid(auction, maxBidPriceByCurrentLot, lotInProgress) {
  const tempMin =
    auction &&
    maxBidPriceByCurrentLot &&
    Math.min(
      ...auction.bidIncrementPriceList.filter(
        (x) => x > maxBidPriceByCurrentLot.bidPrice
      )
    );
  if (tempMin === undefined) {
    return lotInProgress[0]?.startingPrice;
  } else if (
    maxBidPriceByCurrentLot.bidPrice < lotInProgress[0]?.startingPrice
  ) {
    return lotInProgress[0]?.startingPrice;
  } else {
    return tempMin;
  }
}

export default function Bidding() {
  useSubscriptions();
  const dispatch = useDispatch();
  const { auctionsID } = useParams();

  const [loading, setLoading] = useState(false);
  const [imgListInProgress, setImgListInProgress] = useState([]);
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });

  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  const auction = useSelector((state) => selectAuctionById(state, auctionsID));
  const lots = useSelector(selectAllLots);
  const lotInProgress = useSelector(selectLotByInProgress());
  const bitItemHistories = useSelector(selectAllBidHistories);
  const { fetchBidHistoriesStatus } = useSelector((state) => state.bidHistory);

  const handleAlertClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertStatus({ ...alertStatus, isOpen: false });
  };

  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotID: lotInProgress.length === 1 && lotInProgress[0].id,
    })
  );

  useEffect(() => {
    if (isAuthenticated !== null && auctionsID) {
      dispatch(selectedAuction({ isAuthenticated, auctionsID }));
      dispatch(fetchLots({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID]);

  const nextBid = getNextBid(auction, maxBidPriceByCurrentLot, lotInProgress);

  useEffect(() => {
    if (
      isAuthenticated !== null &&
      auctionsID &&
      fetchBidHistoriesStatus !== "succeeded"
    ) {
      dispatch(fetchBidHistories({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID, fetchBidHistoriesStatus]);

  useEffect(() => {
    if (isAuthenticated === true && auctionsID) {
      dispatch(fetchAuctionUserLimitations());
      dispatch(fetchMySucceedBids());
    }
  }, [dispatch, isAuthenticated, auctionsID]);

  useEffect(() => {
    if (lotInProgress.length) {
      setImgListInProgress(
        lotInProgress[0].auctionItem.imgUrls.map((url) => {
          return {
            original: url,
            thumbnail: url,
            originalHeight: 400,
          };
        })
      );
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lotInProgress.length]);

  const handleBitClick = async () => {
    setLoading(true);
    const createBidHistoryInput = {
      id: lotInProgress.length === 1 && `${lotInProgress[0].id}-${nextBid}`,
      bidPrice: nextBid,
      auctionsID: auctionsID,
      lotsID: lotInProgress.length === 1 && lotInProgress[0].id,
      bidForm: "Internet",
      userNumber: auction.auctionUserNumbers.items[0].number,
    };
    const response = await dispatch(postBidHistory({ createBidHistoryInput }));

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setAlertStatus({ isOpen: true, isSuccess: true, sentence: "投标成功" });
    } else {
      setLoading(false);
      setAlertStatus({ isOpen: true, isSuccess: false, sentence: "投标失敗" });
    }
  };

  return (
    <div
      style={{
        padding: "0px 5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {lotInProgress.length === 1 ? (
          <>
            <Box sx={{ width: "100%", margin: "1rem 0", minWidth: "350px" }}>
              <BiddingTitle item={lotInProgress[0]} />
            </Box>
            <Box sx={{ width: "70%", minWidth: "350px" }}>
              <Box sx={{ display: "flex", width: "100%" }}>
                <LeftImgList>
                  {lots?.length && lotInProgress?.length ? (
                    <ImageList images={lots} itemId={lotInProgress[0].id} />
                  ) : null}
                </LeftImgList>
                <Paper sx={{ flex: 1, width: "calc(100% - 125px)" }}>
                  <ImageGallery
                    showFullscreenButton={true}
                    showPlayButton={false}
                    showIndex={true}
                    startIndex={0}
                    thumbnailPosition={"bottom"}
                    items={imgListInProgress}
                    useBrowserFullscreen={false}
                    onScreenChange={(isFullScreen) => {
                      setImgListInProgress((prev) =>
                        prev.map((item) => {
                          item.originalHeight = isFullScreen ? "100%" : "400px";
                          return item;
                        })
                      );
                      const imgContainer = document.querySelectorAll(
                        ".image-gallery-image"
                      );
                      imgContainer.forEach(
                        (item) =>
                          (item.style.height = isFullScreen ? "85vh" : "")
                      );
                    }}
                  />
                </Paper>
              </Box>

              <Box sx={{ textAlign: "center", my: "1rem" }}>
                <TextPaperContainer>
                  <TextPaper>
                    <H2 color="secondary.500">
                      Current Bid is: $
                      {maxBidPriceByCurrentLot
                        ? Number(maxBidPriceByCurrentLot.bidPrice)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                        : 0}{" "}
                      (CAD)
                    </H2>
                  </TextPaper>
                  <TextPaper>
                    <H2 color="secondary.500">
                      Next Bid is: $
                      {nextBid.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                      (CAD)
                    </H2>
                  </TextPaper>
                </TextPaperContainer>
                {!cognitoGroup.includes("admin") && (
                  <>
                    <BazarButton
                      variant="contained"
                      onClick={handleBitClick}
                      color="primary"
                      size="large"
                      fullWidth={true}
                      disabled={
                        isAuthenticated !== true ||
                        loading ||
                        !auction?.auctionUserNumbers?.items[0]?.number
                      }
                    >
                      Bid
                      {loading && (
                        <CircularProgress
                          size={24}
                          sx={{
                            color: green[500],
                            position: "absolute",
                          }}
                        />
                      )}
                    </BazarButton>
                    {auction?.auctionUserNumbers?.items?.length !== 0 &&
                      maxBidPriceByCurrentLot?.userNumber ===
                        auction?.auctionUserNumbers?.items[0]?.number && (
                        <Paper
                          sx={{
                            maxWidth: "500px",
                            margin: "auto",
                            backgroundColor: "green",
                          }}
                        >
                          <H1 color="" mb="0.2rem">
                            You are the highest bidder now
                          </H1>
                        </Paper>
                      )}
                  </>
                )}
              </Box>
              {isAuthenticated && !cognitoGroup.includes("admin") && (
                <Paper sx={{ p: "2rem", marginBottom: "1rem" }}>
                  <H3>My Status:</H3>
                  <Box sx={{ pl: "2rem" }}>
                    My Limitation:{" "}
                    {auction?.auctionUserLimitations?.items[0]?.maxUserBidPrice}
                    <br />
                    My Auction User Number:{" "}
                    {auction?.auctionUserNumbers?.items[0]?.number}
                  </Box>
                </Paper>
              )}
            </Box>

            <HistoryList component={Paper}>
              <BidHistoriesRenderList bitItemHistories={bitItemHistories} />
            </HistoryList>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </Box>
      {cognitoGroup.includes("admin") && (
        <Box sx={{ my: "2rem" }}>
          <AdminActions auctionsID={auctionsID} nextBid={nextBid} />
          <AdminTable />
        </Box>
      )}
      <Snackbar
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
    </div>
  );
}
