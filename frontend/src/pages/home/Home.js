/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-25 21:50:18
 * @FilePath: \bhpmJS\frontend\src\pages\home\Home.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { useEffect } from "react";
import {
  fetchAuctionss,
  selectAllAuctionss,
} from "../../redux/slice/auctionsSlice";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../../components/BackdropLoading";
import Section1 from "../../components/fashion-shop/Section1";
import Section11 from "../../components/fashion-shop/Section11";
import { fetchHomePageCarouses } from "../../redux/slice/homePageCarouseSlice";
import { fetchLotss } from "../../redux/slice/lotsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { fetchHomePageCarousesStatus } = useSelector(
    (state) => state.homePageCarouse
  );

  const { fetchLotssStatus } = useSelector((state) => state.lots);
  const { fetchAuctionssStatus } = useSelector((state) => state.auctions);
  const auctionss = useSelector(selectAllAuctionss);

  useEffect(() => {
    if (isAuthenticated !== null) {
      if (fetchAuctionssStatus === "idle" || undefined) {
        dispatch(fetchAuctionss({ isAuthenticated }));
      }

      if (fetchHomePageCarousesStatus === "idle" || undefined) {
        dispatch(fetchHomePageCarouses({ isAuthenticated }));
      }
    }
  }, [
    dispatch,
    isAuthenticated,
    fetchHomePageCarousesStatus,
    fetchAuctionssStatus,
  ]);

  useEffect(() => {
    if (
      isAuthenticated !== null &&
      auctionss[0]?.id &&
      (fetchLotssStatus === "idle" || undefined)
    ) {
      dispatch(
        fetchLotss({
          isAuthenticated,
          auctionsID: auctionss[0].id,
        })
      );
    }
  }, [dispatch, isAuthenticated, auctionss, fetchLotssStatus]);

  return (
    <>
      {fetchHomePageCarousesStatus === "succeeded" &&
      fetchLotssStatus === "succeeded" ? undefined : (
        <BackdropLoading />
      )}
      <>
        <Section1 />
        <Section11 />
      </>
    </>
  );
}
