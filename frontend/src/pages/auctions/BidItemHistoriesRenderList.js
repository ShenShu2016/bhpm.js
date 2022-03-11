import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { H1, H4 } from "../../components/Typography";
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
      alert("失败");
    }
    setLoading(false);
  };
  //console.log(username);
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
                      <H4>
                        Lot:{history.lots.lot}: ${history.bidPrice}(
                        {history.bidForm})
                      </H4>
                      <H1 color="red">{history.bidItemHistoryStatus}</H1>
                      <Typography variant="body1">
                        {moment(history.createdAt).fromNow()}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <H4>
                        Lot:{history.lots.lot}: ${history.bidPrice}(
                        {history.bidForm})
                      </H4>
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
