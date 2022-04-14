import "react-image-gallery/styles/css/image-gallery.css";
import "./slideCSS.css";

import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { H1, H2, H3 } from "../../components/Typography";
import React, { useEffect, useRef, useState } from "react";
import { blue, green } from "@mui/material/colors";
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
  fetchMySucceedBids,
  insertMySucceedBid,
} from "../../redux/slice/mySucceedBidSlice";
import {
  onCreateBidItemHistory,
  onUpdateBidItemHistory,
} from "../../graphql_custom/_subscriptions";
import {
  onCreateMySucceedBid,
  onUpdateLots,
} from "../../graphql/subscriptions";
import {
  selectAuctionsById,
  selectedAuctions,
} from "../../redux/slice/auctionsSlice";
import { useDispatch, useSelector } from "react-redux";

import { API } from "aws-amplify";
import AdminActions from "./AdminActions";
import AdminTable from "./AdminTable";
import BazarButton from "../../components/BazarButton";
import BidItemHistoriesRenderList from "./BidItemHistoriesRenderList";
import BiddingTitle from "./BiddingTitle";
import ImageGallery from "react-image-gallery";
import { fetchAuctionUserLimitations } from "../../redux/slice/auctionUserLimitationSlice";
import { useParams } from "react-router-dom";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   glary: {
//     width: "100%",
//     // [theme.breakpoints.down("900")]: {
//     //   width: "100%",
//     // },
//   },
// }));
export default function BiddingTest() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { auctionsID } = useParams();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  const { username } = useSelector((state) => state.userAuth.user);
  //console.log(cognitoGroup);
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
  //console.log("lotInProgress", lotInProgress);

  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotID: lotInProgress.length === 1 && lotInProgress[0].id,
    })
  );
  //console.log("maxBidPriceByCurrentLot", maxBidPriceByCurrentLot);
  useEffect(() => {
    if (isAuthenticated !== null && auctionsID) {
      dispatch(selectedAuctions({ isAuthenticated, auctionsID }));
      dispatch(fetchLotss({ isAuthenticated, auctionsID }));
    }
  }, [dispatch, isAuthenticated, auctionsID]);
  //console.log("lotss", lotss);
  const auction = useSelector((state) => selectAuctionsById(state, auctionsID));
  //console.log("auction", auction && auction.auctionUserLimitations.items[0]);
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
  //console.log("nextBid", nextBid);

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
    if (isAuthenticated === true && auctionsID) {
      dispatch(fetchAuctionUserLimitations());
      dispatch(fetchMySucceedBids());
    }
  }, [dispatch, isAuthenticated, auctionsID]);

  useEffect(() => {
    if (isAuthenticated === true) {
      //console.log("start subscription++++++");
      const onCreateMySucceedBidSub = API.graphql({
        query: onCreateMySucceedBid,
        variables: {
          owner: username,
        },
      }).subscribe({
        next: ({ value }) => {
          console.log(value);
          dispatch(insertMySucceedBid(value.data.onCreateMySucceedBid));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onCreateMySucceedBidSub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch, username]);

  useEffect(() => {
    if (isAuthenticated !== null) {
      //console.log("start subscription++++++");
      const onCreateBidItemHistorySub = API.graphql({
        query: onCreateBidItemHistory,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          //console.log(value);
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
      //console.log("start subscription++++++");
      const onUpdateBidItemHistorySub = API.graphql({
        query: onUpdateBidItemHistory,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          //console.log(value);
          dispatch(insertBidItemHistory(value.data.onUpdateBidItemHistory));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onUpdateBidItemHistorySub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated !== null) {
      //console.log("start update lots subscription++++++");
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
    setLoading(true);
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
      userNumber: auction.auctionUserNumbers.items[0].number,
    };
    const response = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    //console.log(response.meta.requestStatus);
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setAlertStatus({ isOpen: true, isSuccess: true, sentence: "投标成功" });
    } else {
      setLoading(false);
      setAlertStatus({ isOpen: true, isSuccess: false, sentence: "投标失敗" });
    }
  };

  // console.log("imgUrls", lotInProgress[0].auctionItem.imgUrls);
  const [imgListInProgress, setImgListInProgress] = useState([]);
  useEffect(() => {
    if (lotInProgress.length) {
      setImgListInProgress(
        lotInProgress[0].auctionItem.imgUrls.map((url) => {
          return { original: url, thumbnail: url, originalHeight: 500 };
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lotInProgress.length]);
  const [thumbnailPosition, setThumbnailPosition] = useState("left");

  return (
    <div
      style={{
        padding: "0px 10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* <AdminLotsGrid /> */}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {lotInProgress.length === 1 ? (
          <>
            <Box sx={{ width: "100%", margin: "1rem 0", minWidth: "400px" }}>
              <BiddingTitle
                title={lotInProgress[0]?.auctionItem?.title}
                description={lotInProgress[0]?.auctionItem?.description}
                createdAt={lotInProgress[0]?.auctionItem?.createdAt}
              ></BiddingTitle>
            </Box>
            <Box sx={{ width: "70%", minWidth: "400px" }}>
              <Paper>
                <Box>
                  <ImageGallery
                    showFullscreenButton={true}
                    showPlayButton={false}
                    showIndex={true}
                    startIndex={0}
                    useBrowserFullscreen={true}
                    thumbnailPosition={thumbnailPosition}
                    items={imgListInProgress}
                    onScreenChange={(isFullScreen) => {
                      setImgListInProgress((prev) =>
                        prev.map((item) => {
                          item.originalHeight = isFullScreen ? "100%" : "500px";
                          return item;
                        })
                      );
                      setThumbnailPosition(() =>
                        isFullScreen && window.outerWidth < 600
                          ? "bottom"
                          : "left"
                      );
                      const imgContainer = document.querySelectorAll(
                        ".image-gallery-image"
                      );
                      imgContainer.forEach(
                        (item) =>
                          (item.style.height = isFullScreen ? "100vh" : "")
                      );
                    }}
                  />
                </Box>
              </Paper>
              {/* <Box>
              <H2>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Lot: {lotInProgress[0].lot}
                      </Typography>
                      <Typography color="text.secondary">
                        Title: {lotInProgress[0].auctionItem.title}
                      </Typography>
                      <Typography color="text.secondary">
                        Name: {lotInProgress[0].auctionItem.name}
                      </Typography>
                      <Typography variant="body2">
                        Starting Price: {lotInProgress[0].startingPrice}
                      </Typography>
                      <Typography variant="body2">
                        Category: {lotInProgress[0].auctionItem.categoryID}
                      </Typography>
                      <Typography variant="body2">
                        Description: {lotInProgress[0].auctionItem.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </H2>
            </Box> */}
              <Box sx={{ textAlign: "center", my: "1rem" }}>
                <Box
                  sx={{
                    textAlign: "center",
                    my: window.outerWidth < 600 ? 0 : "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <Paper
                    sx={{
                      width: "49.5%",
                      minWidth: window.outerWidth < 600 ? "400px" : "",
                      marginBottom: window.outerWidth < 600 ? "16px" : "",
                    }}
                  >
                    <H2 color="secondary.500">
                      Current Bid is: $
                      {maxBidPriceByCurrentLot
                        ? Number(maxBidPriceByCurrentLot.bidPrice)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                        : 0}{" "}
                      (CAD)
                    </H2>
                  </Paper>
                  <Paper
                    sx={{
                      width: "49.5%",
                      minWidth: window.outerWidth < 600 ? "400px" : "",
                      marginBottom: window.outerWidth < 600 ? "16px" : "",
                    }}
                  >
                    <H2 color="secondary.500">
                      Next Bid is: $
                      {nextBid
                        ? nextBid.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                        : lotInProgress[0].startingPrice
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                      (CAD)
                    </H2>
                  </Paper>
                </Box>
                {!cognitoGroup.includes("admin") && (
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
                )}
                {maxBidPriceByCurrentLot &&
                  auction.auctionUserNumbers &&
                  auction.auctionUserNumbers.items.length !== 0 &&
                  maxBidPriceByCurrentLot.userNumber ===
                    auction.auctionUserNumbers.items[0].number && (
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
            <Box
              sx={{
                flex: 1,
                maxWidth: "70%",
                minWidth: "310px",
                maxHeight: "500px",
                overflow: "auto",
                marginLeft: "8px",
                padding: "0 16px",
              }}
              component={Paper}
            >
              <div ref={messageRef}>
                <BidItemHistoriesRenderList
                  bitItemHistories={bitItemHistories}
                />
              </div>
            </Box>
          </>
        ) : (
          // <Typography variant="h3"><CircularProgress />Waiting</Typography>
          <>
            <Box
              sx={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress sx={{ color: blue[600] }} size={60} />
              <Typography
                sx={{ my: "2rem", fontSize: "20px", fontWeight: "bold" }}
              >
                Waiting...
              </Typography>
            </Box>
          </>
        )}
      </Box>
      {cognitoGroup.includes("admin") && (
        <Box sx={{ my: "2rem" }}>
          <AdminActions
            auctionsID={auctionsID}
            nextBid={
              nextBid
                ? nextBid
                : lotInProgress[0] && lotInProgress[0].startingPrice
            }
          />
          <AdminTable />
        </Box>
      )}

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
    </div>
  );
}
