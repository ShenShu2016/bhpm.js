/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-12 09:44:45
 * @FilePath: \bhpmJS\frontend\src\components\bidding\BidHistoriesRenderList.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { H3, H4 } from "../Typography";
import React, { useEffect, useRef, useState } from "react";
import {
  isLotSucceedByLotId,
  updateBidHistoryDetail,
} from "../../redux/slice/bidHistorySlice";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../BazarButton";
import { postMySucceedBid } from "../../redux/slice/mySucceedBidSlice";
import { selectLotByInProgress } from "../../redux/slice/lotSlice";

export default function BidHistoriesRenderList({ bitItemHistories }) {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  const [loading, setLoading] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [pendingHistory, setPendingHistory] = useState(false);

  const [userNumber, setUserNumber] = useState(0);
  const lotInProgress = useSelector(selectLotByInProgress());
  //console.log(userNumber, pendingHistory);

  const handleClickOpen = (history) => {
    setUserNumber(0);
    setPendingHistory(history);

    if (history.userNumber === 0) {
      setSuccessDialogOpen(true);
    } else if (history.userNumber !== 0) {
      handleBidSuccess(history);
    }
  };

  const handleClose = () => {
    setSuccessDialogOpen(false);
  };

  const isLotSucceed = useSelector(
    isLotSucceedByLotId({
      lotBidHistoriesId: lotInProgress?.id,
    })
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
  }, [bitItemHistories, cognitoGroup]);

  const handleBidSuccess = async (history) => {
    setLoading(true);
    console.log(history);
    const updateBidHistoryDetailInput = {
      id: history.id,
      bidHistoryStatus: "Success",
      userNumber: history.userNumber === 0 ? userNumber : history.userNumber,
    };
    console.log(updateBidHistoryDetailInput);
    const response = await dispatch(
      updateBidHistoryDetail(updateBidHistoryDetailInput)
    );
    //console.log(response.meta.requestStatus);

    const createMySucceedBidInput = {
      mySucceedBidAuctionId: history.auctionBidHistoriesId,
      mySucceedBidBidHistoryId: history.id,
      owner: history.owner,
    };
    console.log(createMySucceedBidInput);
    const response2 = await dispatch(
      postMySucceedBid({ createMySucceedBidInput })
    );
    if (
      response?.meta?.requestStatus === "fulfilled" &&
      response2?.meta?.requestStatus === "fulfilled"
    ) {
      setLoading(false);
      alert("成功");
    } else {
      setLoading(false);
      alert("失敗");
    }
    setLoading(false);
  };
  //console.log(username);

  function differentStatus(history) {
    if (history.bidHistoryStatus === "Success") {
      return (
        <>
          <Card sx={{ backgroundColor: "#ba000d", p: "0.2rem" }}>
            <H4 sx={{ color: "white" }}>
              Lot #{history.lot.lotOrder} sold For CAD ${history.bidPrice} to
              Competing Bidder to User: {history.userNumber}
            </H4>
          </Card>
        </>
      );
    }
    if (history.bidHistoryStatus === "Start") {
      return (
        <>
          <Card sx={{ backgroundColor: "#388e3c", p: "0.2rem" }}>
            <H4 color="white">
              Lot #{history.lot.lotOrder} Opened - Ask $
              {history.lot.startingPrice}
            </H4>
          </Card>
        </>
      );
    }
    if (history.bidHistoryStatus === "FirstCall") {
      return (
        <>
          <Card sx={{ backgroundColor: "#ffd686", p: "0.2rem" }}>
            <H3 sx={{ color: "blue" }}>First Warning</H3>
          </Card>
        </>
      );
    }
    if (history.bidHistoryStatus === "SecondCall") {
      return (
        <>
          <Card sx={{ backgroundColor: "#ffd686" }}>
            <H3 sx={{ color: "blue" }}>Second Warning</H3>
          </Card>
        </>
      );
    } else
      return (
        <>
          <Card sx={{ backgroundColor: "" }}>
            <H4>
              ${history.bidPrice} ({history.bidForm}): Competing Bid
            </H4>
          </Card>
        </>
      );
  }

  return (
    <div ref={messageRef}>
      <Stack
        spacing={2}
        sx={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        {bitItemHistories &&
          bitItemHistories.map((history) => {
            return (
              <Box key={history.id}>
                {history.bidHistoryStatus ? (
                  <> {differentStatus(history)}</>
                ) : (
                  <Card
                    sx={{
                      backgroundColor:
                        history.userNumber === 0 ? "#c8c8c8" : "blue",
                    }}
                  >
                    <H4
                      sx={{
                        color: history.userNumber === 0 ? "blue" : "white",
                      }}
                    >
                      ${history.bidPrice} ({history.bidForm}): Competing Bid
                    </H4>
                    {history.owner === username && "You"}

                    {cognitoGroup.includes("admin") &&
                      history.lotBidHistoriesId === lotInProgress.id && (
                        <BazarButton
                          color="primary"
                          variant="contained"
                          size="small"
                          disabled={loading || !!isLotSucceed}
                          onClick={() => {
                            handleClickOpen(history);
                          }}
                        >
                          成功交易
                        </BazarButton>
                      )}
                  </Card>
                )}
              </Box>
            );
          })}
      </Stack>
      <div>
        <Dialog open={successDialogOpen} onClose={handleClose}>
          <DialogTitle>User Number?</DialogTitle>
          <DialogContent>
            <DialogContentText>手里举着的号码牌是多少？</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="User Number"
              type="number"
              value={userNumber}
              fullWidth
              variant="standard"
              onChange={(event) => setUserNumber(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleBidSuccess(pendingHistory);
                handleClose();
              }}
            >
              提交
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
