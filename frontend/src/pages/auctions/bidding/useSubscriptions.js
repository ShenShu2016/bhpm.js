/*
 * @Author: Shen Shu
 * @Date: 2022-04-23 13:59:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 14:09:57
 * @FilePath: \bhpmJS\frontend\src\pages\auctions\bidding\useSubscriptions.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  onCreateBidItemHistory,
  onUpdateBidItemHistory,
} from "../../../graphql_custom/_subscriptions";
import {
  onCreateMySucceedBid,
  onUpdateLots,
} from "../../../graphql/subscriptions";
import { useDispatch, useSelector } from "react-redux";

import { API } from "aws-amplify";
import { insertBidItemHistory } from "../../../redux/slice/bidItemHistorySlice";
import { insertMySucceedBid } from "../../../redux/slice/mySucceedBidSlice";
import { updateLotsDetailBySub } from "../../../redux/slice/lotsSlice";
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
}
