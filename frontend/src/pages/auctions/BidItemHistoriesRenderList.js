import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { H2, H3, H4, H5 } from "../../components/Typography";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BazarButton from "../../components/BazarButton";
import moment from "moment";
import { updateBidItemHistoryDetail } from "../../redux/slice/bidItemHistorySlice";

export default function BidItemHistoriesRenderList({ bitItemHistories }) {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const { cognitoGroup } = useSelector((state) => state.userAuth);
  const [loading, setLoading] = useState(false);

  const handleBidSuccess = async (history) => {
    setLoading(true);
    const updateBidItemHistoryDetailInput = {
      id: history.id,
      bidItemHistoryStatus: "Success",
    };
    console.log(updateBidItemHistoryDetailInput);
    const response = await dispatch(
      updateBidItemHistoryDetail(updateBidItemHistoryDetailInput)
    );
    //console.log(response.meta.requestStatus);
    if (response.meta.requestStatus === "fulfilled") {
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
          <H4>Lot: {history.lots.lot}</H4>
          <H3>
            ${history.bidPrice} ({history.bidForm})
          </H3>
          <H5 color="red">
            Lot {history.lots.lot} sold For CAD ${history.bidPrice} to competing
            bid
          </H5>
        </>
      );
    }
    if (history.bidItemHistoryStatus === "Start") {
      return (
        <>
          <H2 color="green">
            Lot {history.lots.lot} Start at Price:{history.lots.startingPrice}
          </H2>
        </>
      );
    }
    if (history.bidItemHistoryStatus === "FirstCall") {
      return (
        <>
          <H4>Lot: {history.lots.lot}</H4>
          <H3>
            ${history.bidPrice} ({history.bidForm})
          </H3>
          <H2 color="blue">First Call</H2>
        </>
      );
    }
    if (history.bidItemHistoryStatus === "SecondCall") {
      return (
        <>
          <H4>Lot: {history.lots.lot}</H4>
          <H3>
            ${history.bidPrice} ({history.bidForm})
          </H3>
          <H2 color="blue">Second Call</H2>
        </>
      );
    } else
      return (
        <>
          <H4>Lot: {history.lots.lot}</H4>
          <H3>
            ${history.bidPrice} ({history.bidForm})
          </H3>
          <H2 color="red">{history.bidItemHistoryStatus}</H2>
        </>
      );
  }

  return (
    <div>
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
              <Box sx={{ width: "200px" }} key={history.id}>
                {history.bidItemHistoryStatus ? (
                  <Card sx={{ minWidth: 275, backgroundColor: "" }}>
                    <CardContent>
                      {differentStatus(history)}
                      <Typography variant="body1">
                        {moment(history.createdAt).fromNow()}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <H4>Lot:{history.lots.lot}</H4>
                      <H5>
                        Bid Price: ${history.bidPrice}({history.bidForm})
                        <br />
                        From User NO. {history.userNumber}
                      </H5>
                      {history.owner === username && "You"}

                      <Typography variant="body1">
                        {moment(history.createdAt).fromNow()}
                      </Typography>

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
                    </CardContent>
                  </Card>
                )}
              </Box>
            );
          })}
      </Stack>
    </div>
  );
}
