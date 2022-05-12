/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-12 09:44:02
 * @FilePath: \bhpmJS\frontend\src\components\bidding\AdminActions.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  Box,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  postBidHistory,
  selectMaxBidPriceByCurrentLot,
} from "../../redux/slice/bidHistorySlice";
import {
  selectLotByInProgress,
  selectLotByLotOrder,
  selectLotByNextLotNumber,
  updateLotDetail,
} from "../../redux/slice/lotSlice";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../BazarButton";
import { H1 } from "../Typography";
import { green } from "@mui/material/colors";

export default function AdminActions({ auctionId, nextBid }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [bidForm, setBidForm] = useState("Room");
  const [userNumber, setUserNumber] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);

  useEffect(() => {
    if (nextBid) {
      setBidAmount(nextBid);
    }
  }, [nextBid]);

  const lotInProgress = useSelector(selectLotByInProgress());
  const maxBidPriceByCurrentLot = useSelector(
    selectMaxBidPriceByCurrentLot({
      lotBidHistoriesId: lotInProgress?.id,
    })
  );
  const lot1 = useSelector(selectLotByLotOrder({ lotOrder: 1 }));
  const handleSubmitBid = async (event) => {
    setLoading(true);
    const createBidHistoryInput = {
      id: lotInProgress && `${lotInProgress.id}-${bidAmount}`,
      bidPrice: bidAmount,
      auctionBidHistoriesId: auctionId,
      lotBidHistoriesId: lotInProgress?.id,
      bidForm: bidForm,
      userNumber: userNumber,
      owner: "admin",
    };
    const response = await dispatch(postBidHistory({ createBidHistoryInput }));
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setUserNumber(0);
      // alert("bid成功");
    } else {
      setLoading(false);
      setUserNumber(0);
      // alert("bid失敗");
    }
  };

  const handleFirstSecondCall = async (event) => {
    setLoading(true);
    const createBidHistoryInput = {
      bidPrice: maxBidPriceByCurrentLot.bidPrice,
      auctionBidHistoriesId: auctionId,
      bidForm: "Room",
      lotBidHistoriesId: lotInProgress?.id,
      userNumber: 0,
      bidHistoryStatus: event.target.value,
      owner: "admin",
    };
    const response = await dispatch(postBidHistory({ createBidHistoryInput }));
    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      setUserNumber(0);
      //alert(event.target.value, " 成功");
    } else {
      setLoading(false);
      setUserNumber(0);
      //alert(event.target.value, " 失敗");
    }
  };

  const nextLotArr = useSelector(
    selectLotByNextLotNumber({
      lotOrder: parseInt(lotInProgress?.lotOrder) + 1,
    })
  );

  const handleFinishAndNext = async (event) => {
    setLoading(true);
    const currentLot = lotInProgress;
    const nextLot = nextLotArr[0];
    const response1 = await dispatch(
      updateLotDetail({ id: currentLot.id, lotStatus: "Finished" })
    );
    console.log(response1);

    const response2 = await dispatch(
      updateLotDetail({ id: nextLot.id, lotStatus: "InProgress" })
    );
    console.log(response2);
    const createBidHistoryInput = {
      bidPrice: 0,
      auctionBidHistoriesId: auctionId,
      bidForm: "Room",
      lotBidHistoriesId: nextLot.id,
      userNumber: 0,
      bidHistoryStatus: "Start",
      owner: "admin",
    };
    const response3 = await dispatch(postBidHistory({ createBidHistoryInput }));
    console.log(response3);

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

  const handleStartFirstOne = async (event) => {
    setLoading(true);
    const response2 = await dispatch(
      updateLotDetail({ id: lot1.id, lotStatus: "InProgress" })
    );
    console.log(response2);
    const createBidHistoryInput = {
      bidPrice: 0,
      auctionBidHistoriesId: auctionId,
      bidForm: "Room",
      lotBidHistoriesId: lot1.id,
      userNumber: 0,
      bidHistoryStatus: "Start",
      owner: "admin",
    };
    const response3 = await dispatch(postBidHistory({ createBidHistoryInput }));
    console.log(response3);
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
              disabled={true}
              value={userNumber}
              onChange={(event) => setUserNumber(event.target.value)}
              startAdornment={
                <InputAdornment position="start">#</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          <FormControl fullWidth>
            {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bidForm}
              label="Age"
              onChange={(event) => setBidForm(event.target.value)}
            >
              <MenuItem value={"Room"}>Room</MenuItem>
              <MenuItem value={"Internet"}>Internet</MenuItem>
              <MenuItem value={"Phone"}>Phone</MenuItem>
            </Select> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={(event) => setBidForm(event.target.value)}
            >
              <FormControlLabel value="Room" control={<Radio />} label="Room" />
              <FormControlLabel
                value="Internet"
                control={<Radio />}
                label="Internet"
              />
              <FormControlLabel
                value="Phone"
                control={<Radio />}
                label="Phone"
              />
            </RadioGroup>
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
          Bid
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
          onClick={handleStartFirstOne}
          disabled={loading || !!maxBidPriceByCurrentLot}
        >
          Auction Start! Start Lot #1
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
      <Stack direction="row" spacing={2} sx={{ my: "1rem" }}>
        <BazarButton
          size="large"
          color="primary"
          variant="contained"
          value={"FirstCall"}
          onClick={handleFirstSecondCall}
          disabled={loading || !maxBidPriceByCurrentLot}
        >
          First Call
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
          value={"SecondCall"}
          onClick={handleFirstSecondCall}
          disabled={loading || !maxBidPriceByCurrentLot}
        >
          Second Call
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
          onClick={handleFinishAndNext}
          disabled={loading || !lotInProgress}
        >
          Finish lot: {lotInProgress?.lot} & Start Next (if exist)
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
