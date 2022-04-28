/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-28 13:46:56
 * @FilePath: \bhpmJS\frontend\src\pages\auction\bidding\Bidding.js
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
  fetchAuctionUserLimitations,
  selectMyAuctionLimitation,
} from "../../../redux/slice/auctionUserLimitationSlice";
import {
  fetchAuctionUserNumbers,
  selectMyAuctionUserNumber,
} from "../../../redux/slice/auctionUserNumberSlice";
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
import { fetchMySucceedBids } from "../../../redux/slice/mySucceedBidSlice";
import { green } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import useSubscriptions from "./useSubscriptions";

function getNextBid(auction, maxBidPriceByCurrentLot, lotInProgress) {
  //console.log(auction, maxBidPriceByCurrentLot, lotInProgress);
  const tempMin =
    auction &&
    maxBidPriceByCurrentLot &&
    Math.min(
      ...auction.bidIncrementPriceList.filter(
        (x) => x > maxBidPriceByCurrentLot.bidPrice
      )
    );
  if (tempMin === undefined) {
    return lotInProgress?.startingPrice;
  } else if (maxBidPriceByCurrentLot.bidPrice < lotInProgress?.startingPrice) {
    return lotInProgress?.startingPrice;
  } else {
    return tempMin;
  }
}

function isHighestBid(myUserNumber, maxBidPriceByCurrentLot) {
  if (
    myUserNumber?.number &&
    maxBidPriceByCurrentLot?.userNumber === myUserNumber?.number
  ) {
    return true;
  } else {
    return false;
  }
}

export default function Bidding() {
  useSubscriptions();
  const dispatch = useDispatch();
  const { auctionId } = useParams();
  //console.log(auctionId);
  const { username } = useSelector((state) => state.userAuth.user);
  const [loading, setLoading] = useState(false);
  const [imgListInProgress, setImgListInProgress] = useState([]);
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });

  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  const auction = useSelector((state) => selectAuctionById(state, auctionId));

  const lots = useSelector(selectAllLots);
  const lotInProgress = useSelector(selectLotByInProgress());
  const bitItemHistories = useSelector(selectAllBidHistories);
  const myLimitation = useSelector(
    selectMyAuctionLimitation({ auctionId, username })
  );
  const myUserNumber = useSelector(
    selectMyAuctionUserNumber({ auctionId, username })
  );
  const { fetchBidHistoriesStatus } = useSelector((state) => state.bidHistory);

  const handleAlertClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertStatus({ ...alertStatus, isOpen: false });
  };

  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotBidHistoriesId: lotInProgress?.id,
    })
  );

  useEffect(() => {
    if (isAuthenticated !== null && auctionId) {
      dispatch(selectedAuction({ isAuthenticated, auctionId }));
      dispatch(fetchLots({ isAuthenticated, auctionId }));
    }
  }, [dispatch, isAuthenticated, auctionId]);

  const nextBid = getNextBid(auction, maxBidPriceByCurrentLot, lotInProgress);

  useEffect(() => {
    if (
      isAuthenticated !== null &&
      auctionId &&
      fetchBidHistoriesStatus !== "succeeded"
    ) {
      dispatch(fetchBidHistories({ isAuthenticated, auctionId }));
    }
  }, [dispatch, isAuthenticated, auctionId, fetchBidHistoriesStatus]);

  useEffect(() => {
    if (isAuthenticated === true && auctionId) {
      dispatch(fetchAuctionUserLimitations());
      dispatch(fetchAuctionUserNumbers());
      dispatch(fetchMySucceedBids());
    }
  }, [dispatch, isAuthenticated, auctionId]);

  useEffect(() => {
    if (lotInProgress) {
      setImgListInProgress(
        lotInProgress.auctionItem.imgUrls.map((url) => {
          return {
            original: url,
            thumbnail: url,
            originalHeight: 400,
          };
        })
      );
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lotInProgress]);

  const handleBitClick = async () => {
    setLoading(true);
    const createBidHistoryInput = {
      id: lotInProgress && `${lotInProgress.id}-${nextBid}`,
      bidPrice: nextBid,
      auctionBidHistoriesId: auctionId,
      lotBidHistoriesId: lotInProgress.id,
      bidForm: "Internet",
      userNumber: auction.auctionUserNumbers.items[0].number,
      owner: username,
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

  function isHighestBid() {
    if (
      myUserNumber?.number &&
      maxBidPriceByCurrentLot?.userNumber === myUserNumber?.number
    ) {
      return true;
    } else {
      return false;
    }
  }
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
        {lotInProgress ? (
          <>
            <Box sx={{ width: "100%", margin: "1rem 0", minWidth: "350px" }}>
              <BiddingTitle item={lotInProgress} />
            </Box>
            <Box sx={{ width: "70%", minWidth: "350px" }}>
              <Box sx={{ display: "flex", width: "100%" }}>
                <LeftImgList>
                  {lots?.length && lotInProgress ? (
                    <ImageList images={lots} itemId={lotInProgress.id} />
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
                        loading || !myUserNumber?.number || isHighestBid()
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
                    {isHighestBid() && (
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
                    My Limitation: {myLimitation.maxUserBidPrice}{" "}
                    {myLimitation.limitStatus}
                    <br />
                    My Auction User Number: {myUserNumber.number}
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
          <AdminActions auctionId={auctionId} nextBid={nextBid} />
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
