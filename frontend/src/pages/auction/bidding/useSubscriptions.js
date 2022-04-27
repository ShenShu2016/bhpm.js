/*
 * @Author: Shen Shu
 * @Date: 2022-04-23 13:59:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 10:41:24
 * @FilePath: \bhpmJS\frontend\src\pages\auctions\bidding\useSubscriptions.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  onCreateBidHistory,
  onUpdateBidHistory,
} from "../../../graphql_custom/_subscriptions";
import {
  onCreateMySucceedBid,
  onUpdateLot,
} from "../../../graphql/subscriptions";
import { useDispatch, useSelector } from "react-redux";

import { API } from "aws-amplify";
import { insertBidHistory } from "../../../redux/slice/bidHistorySlice";
import { insertMySucceedBid } from "../../../redux/slice/mySucceedBidSlice";
import { updateLotDetailBySub } from "../../../redux/slice/lotSlice";
import { useEffect } from "react";

export default function useSubscriptions() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { username } = useSelector((state) => state.userAuth.user);
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
      const onCreateBidHistorySub = API.graphql({
        query: onCreateBidHistory,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          //console.log(value);
          dispatch(insertBidHistory(value.data.onCreateBidHistory));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onCreateBidHistorySub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated !== null) {
      //console.log("start subscription++++++");
      const onUpdateBidHistorySub = API.graphql({
        query: onUpdateBidHistory,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          //console.log(value);
          dispatch(insertBidHistory(value.data.onUpdateBidHistory));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onUpdateBidHistorySub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);
  useEffect(() => {
    if (isAuthenticated !== null) {
      //console.log("start update lots subscription++++++");
      const onUpdateLotSub = API.graphql({
        query: onUpdateLot,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      }).subscribe({
        next: ({ value }) => {
          console.log(value);
          dispatch(updateLotDetailBySub(value.data.onUpdateLot));
        },
        error: (error) => console.warn(error),
      });

      return () => {
        onUpdateLotSub.unsubscribe();
        console.log("close subscription");
      };
    }
  }, [isAuthenticated, dispatch]);
}
