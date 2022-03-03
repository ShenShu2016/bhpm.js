import "react-image-gallery/styles/css/image-gallery.css";

import { API, graphqlOperation } from "aws-amplify";
import {
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchBidItemHistories,
  insertBidItemHistory,
  postBidItemHistory,
  selectAllBidItemHistories,
  selectMaxBidPriceByCurrentLot,
} from "../../redux/slice/bidItemHistorySlice";
import {
  fetchLotss,
  selectAllLotss,
  updateLotsDetail,
  updateLotsDetailBySub,
} from "../../redux/slice/lotsSlice";
import {
  selectAllAuctionss,
  selectAuctionsById,
  selectedAuctions,
} from "../../redux/slice/auctionsSlice";
import { useDispatch, useSelector } from "react-redux";

import AdminLotsGrid from "./AdminLotsGrid";
import AdminTable from "./AdminTable";
import BazarButton from "../../components/BazarButton";
import BidItemHistoriesRenderList from "./BidItemHistoriesRenderList";
import ImageGallery from "react-image-gallery";
import LotssRenderList from "./LotssRenderList";
import { onCreateBidItemHistory } from "../../graphql_custom/_subscriptions";
import { onUpdateLots } from "../../graphql/subscriptions";
import { useParams } from "react-router-dom";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
export default function BiddingTest() {
  const dispatch = useDispatch();
  const { auctionsID } = useParams();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
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

  const lotss = useSelector(selectAllLotss);

  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotID: "b1b9732c-5172-4f14-9da8-cb99e73be2ea",
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
  const auction = useSelector(selectAllAuctionss)[0];
  console.log("auction", auction);
  console.log(auction && auction.bidIncrementPriceList);

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
      //id: "999",
      bidPrice: nextBid,
      auctionsID: auctionsID,
      lotsID: "b1b9732c-5172-4f14-9da8-cb99e73be2ea",
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

  return (
    <>
      {/* <AdminLotsGrid /> */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ImageGallery
            showFullscreenButton={true}
            showPlayButton={false}
            showIndex={true}
            startIndex={1}
            thumbnailPosition={"left"}
            items={[
              {
                original: "https://picsum.photos/id/1018/1000/600/",
                thumbnail: "https://picsum.photos/id/1018/1000/600/",
              },
              {
                original: "https://picsum.photos/id/1015/1000/600/",
                thumbnail: "https://picsum.photos/id/1015/1000/600/",
              },
            ]}
          />
        </Grid>
        <Grid item xs={4}>
          <Container sx={{ maxHeight: "500px", overflow: "auto" }}>
            <BidItemHistoriesRenderList bitItemHistories={bitItemHistories} />
          </Container>
        </Grid>
      </Grid>
      <Container component={Paper} sx={{ my: 2, textAlign: "center" }}>
        <Typography variant="h3">Next Bid is:{nextBid}</Typography>
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

      <AdminTable />

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
