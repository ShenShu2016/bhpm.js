/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 14:12:26
 * @FilePath: \bhpmJS\frontend\src\components\bidding\BidItemHistoriesRenderList.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Card, Stack } from "@mui/material";
import { H3, H4 } from "../../components/Typography";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../../components/BazarButton";
import { postMySucceedBid } from "../../redux/slice/mySucceedBidSlice";
import { updateBidItemHistoryDetail } from "../../redux/slice/bidItemHistorySlice";

export default function BidItemHistoriesRenderList({ bitItemHistories }) {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  const [loading, setLoading] = useState(false);

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
  const handleBidSuccess = async (history) => {
    setLoading(true);
    console.log(history);
    const updateBidItemHistoryDetailInput = {
      id: history.id,
      bidItemHistoryStatus: "Success",
    };
    console.log(updateBidItemHistoryDetailInput);
    const response = await dispatch(
      updateBidItemHistoryDetail(updateBidItemHistoryDetailInput)
    );
    //console.log(response.meta.requestStatus);

    const createMySucceedBidInput = {
      auctionsID: history.auctionsID,
      bidItemHistoryID: history.id,
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
    if (history.bidItemHistoryStatus === "Success") {
      return (
        <>
          <Card sx={{ backgroundColor: "#ba000d", p: "0.2rem" }}>
            <H4 sx={{ color: "white" }}>
              Lot {history.lots.lot} sold For CAD ${history.bidPrice} to
              Competing Bidder
            </H4>
          </Card>
        </>
      );
    }
    if (history.bidItemHistoryStatus === "Start") {
      return (
        <>
          <Card sx={{ backgroundColor: "#388e3c", p: "0.2rem" }}>
            <H4 color="white">
              Lot {history.lots.lot} Opened - Ask ${history.lots.startingPrice}
            </H4>
          </Card>
        </>
      );
    }
    if (history.bidItemHistoryStatus === "FirstCall") {
      return (
        <>
          <Card sx={{ backgroundColor: "#ffd686", p: "0.2rem" }}>
            <H3 sx={{ color: "blue" }}>First Warning</H3>
          </Card>
        </>
      );
    }
    if (history.bidItemHistoryStatus === "SecondCall") {
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
                {history.bidItemHistoryStatus ? (
                  <> {differentStatus(history)}</>
                ) : (
                  <Card sx={{ backgroundColor: "#c8c8c8" }}>
                    <H4 sx={{ color: "blue" }}>
                      ${history.bidPrice} ({history.bidForm}): Competing Bid
                    </H4>
                    {history.owner === username && "You"}

                    {cognitoGroup.includes("admin") && (
                      <BazarButton
                        color="primary"
                        variant="contained"
                        size="small"
                        disabled={loading}
                        onClick={() => {
                          handleBidSuccess(history);
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
    </div>
  );
}
