import {
  Box,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  postBidItemHistory,
  selectMaxBidPriceByCurrentLot,
} from "../../redux/slice/bidItemHistorySlice";
import {
  selectLotByInProgress,
  selectLotByNextLotNumber,
  updateLotsDetail,
} from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../BazarButton";
import { H1 } from "../Typography";
import { green } from "@mui/material/colors";

export default function AdminActions({ auctionsID, nextBid }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [bidForm, setBidForm] = useState("Room");
  const [userNumber, setUserNumber] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);
  //console.log(bidAmount);

  useEffect(() => {
    if (nextBid) {
      setBidAmount(nextBid);
    }
  }, [nextBid]);

  const lotInProgress = useSelector(selectLotByInProgress());
  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotID: lotInProgress.length === 1 && lotInProgress[0].id,
    })
  );
  const handleSubmitBid = async (event) => {
    setLoading(true);
    const createBidItemHistoryInput = {
      id: lotInProgress.length === 1 && `${lotInProgress[0].id}-${bidAmount}`,
      bidPrice: bidAmount,
      auctionsID: auctionsID,
      lotsID: lotInProgress.length === 1 && lotInProgress[0].id,
      bidForm: bidForm,
      userNumber: userNumber,
      owner: "admin",
    };
    const response = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setUserNumber(0);
      alert("bid成功");
    } else {
      setLoading(false);
      setUserNumber(0);
      alert("bid失敗");
    }
  };

  const handleFirstCall = async (event) => {
    setLoading(true);
    const createBidItemHistoryInput = {
      bidPrice: maxBidPriceByCurrentLot.bidPrice,
      auctionsID: auctionsID,
      bidForm: "Room",
      lotsID: lotInProgress.length === 1 && lotInProgress[0].id,
      userNumber: 0,
      bidItemHistoryStatus: "FirstCall",
      owner: "admin",
    };
    const response = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setUserNumber(0);
      alert("First Call 成功");
    } else {
      setLoading(false);
      setUserNumber(0);
      alert("First Call 失敗");
    }
  };

  const handleSecondCall = async (event) => {
    setLoading(true);
    const createBidItemHistoryInput = {
      bidPrice: maxBidPriceByCurrentLot.bidPrice,
      auctionsID: auctionsID,
      bidForm: "Room",
      lotsID: lotInProgress.length === 1 && lotInProgress[0].id,
      userNumber: 0,
      bidItemHistoryStatus: "SecondCall",
      owner: "admin",
    };
    const response = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setUserNumber(0);
      alert("First Call 成功");
    } else {
      setLoading(false);
      setUserNumber(0);
      alert("First Call 失敗");
    }
  };

  const nextLotArr = useSelector(
    selectLotByNextLotNumber(lotInProgress[0] && lotInProgress[0].lot + 1)
  );
  //console.log(nextLotArr);
  const handleFinishAndNext = async (event) => {
    setLoading(true);
    const currentLot = lotInProgress[0];
    const nextLot = nextLotArr[0];
    const response1 = await dispatch(
      updateLotsDetail({ id: currentLot.id, lotsStatus: "Finished" })
    );
    console.log(response1);

    const response2 = await dispatch(
      updateLotsDetail({ id: nextLot.id, lotsStatus: "InProgress" })
    );
    console.log(response2);
    const createBidItemHistoryInput = {
      bidPrice: 0,
      auctionsID: auctionsID,
      bidForm: "Room",
      lotsID: nextLot.id,
      userNumber: 0,
      bidItemHistoryStatus: "Start",
      owner: "admin",
    };
    const response3 = await dispatch(
      postBidItemHistory({ createBidItemHistoryInput })
    );
    console.log(response3);
    // const createBidItemHistoryInput = {
    //   bidPrice: maxBidPriceByCurrentLot.bidPrice,
    //   auctionsID: auctionsID,
    //   bidForm: "Room",
    //   lotsID: lotInProgress.length === 1 && lotInProgress[0].id,
    //   userNumber: 0,
    //   bidItemHistoryStatus: "SecondCall",
    //   owner: "admin",
    // };
    // const response = await dispatch(
    //   postBidItemHistory({ createBidItemHistoryInput })
    // );
    if (response3.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setUserNumber(0);
      alert("成功");
    } else {
      setLoading(false);
      setUserNumber(0);
      alert("失敗");
    }
  };

  return (
    <Box sx={{ mx: "2rem" }}>
      <Box sx={{ my: "1rem" }}>
        <H1 color="primary">
          Bid Amount
          <FormControl sx={{ mx: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">CAD</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={bidAmount}
              onChange={(event) => setBidAmount(event.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </H1>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Stack spacing={2} sx={{ width: "200px", mr: "2rem" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              UserNumber
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={userNumber}
              onChange={(event) => setUserNumber(event.target.value)}
              startAdornment={
                <InputAdornment position="start">#</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">BidForm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bidForm}
              label="Age"
              onChange={(event) => setBidForm(event.target.value)}
            >
              <MenuItem value={"Room"}>Room</MenuItem>
              <MenuItem value={"Internet"}>Internet</MenuItem>
              <MenuItem value={"Phone"}>Phone</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <BazarButton
          variant="contained"
          size="large"
          color="primary"
          disabled={loading}
          sx={{
            width: 200,
            // color: "blue",
          }}
          onClick={handleSubmitBid}
        >
          Bid{" "}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
              }}
            />
          )}
        </BazarButton>
      </Box>
      <Stack direction="row" spacing={2} sx={{ my: "1rem" }}>
        <BazarButton
          size="large"
          color="primary"
          variant="contained"
          onClick={handleFirstCall}
          disabled={loading || !maxBidPriceByCurrentLot}
        >
          First Call{" "}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
              }}
            />
          )}
        </BazarButton>
        <BazarButton
          size="large"
          color="primary"
          variant="contained"
          onClick={handleSecondCall}
          disabled={loading || !maxBidPriceByCurrentLot}
        >
          Second Call{" "}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
              }}
            />
          )}
        </BazarButton>{" "}
        <BazarButton
          size="large"
          color="primary"
          variant="contained"
          onClick={handleFinishAndNext}
          disabled={loading || !lotInProgress[0]}
        >
          Finish lot: {lotInProgress[0] && lotInProgress[0].lot} & Start Next
          (if exist)
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
              }}
            />
          )}
        </BazarButton>
      </Stack>
    </Box>
  );
}
