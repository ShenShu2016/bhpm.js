/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 15:25:28
 * @FilePath: \bhpmJS\frontend\src\pages\home\Home.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { useEffect } from "react";
import {
  fetchAuctions,
  selectAllAuctions,
} from "../../redux/slice/auctionSlice";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../../components/BackdropLoading";
import Section1 from "../../components/fashion-shop/Section1";
import Section11 from "../../components/fashion-shop/Section11";
import { fetchHomePageCarouses } from "../../redux/slice/homePageCarouseSlice";
import { fetchLots } from "../../redux/slice/lotSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { username } = useSelector((state) => state.userAuth.user);
  const { fetchHomePageCarousesStatus } = useSelector(
    (state) => state.homePageCarouse
  );

  const { fetchLotsStatus } = useSelector((state) => state.lot);
  const { fetchAuctionsStatus } = useSelector((state) => state.auction);
  const auctions = useSelector(selectAllAuctions);

  useEffect(() => {
    if (isAuthenticated !== null) {
      if (fetchAuctionsStatus === "idle" || undefined) {
        dispatch(fetchAuctions({ isAuthenticated }));
      }

      if (fetchHomePageCarousesStatus === "idle" || undefined) {
        dispatch(fetchHomePageCarouses({ isAuthenticated }));
      }
    }
  }, [
    dispatch,
    isAuthenticated,
    fetchHomePageCarousesStatus,
    fetchAuctionsStatus,
  ]);

  useEffect(() => {
    if (
      isAuthenticated !== null &&
      auctions[0]?.id &&
      (fetchLotsStatus === "idle" || undefined)
    ) {
      dispatch(
        fetchLots({
          isAuthenticated,
          auctionId: auctions[0].id,
          username: username,
        })
      );
    }
  }, [dispatch, isAuthenticated, auctions, fetchLotsStatus, username]);

  return (
    <>
      {fetchHomePageCarousesStatus === "succeeded" &&
      fetchLotsStatus === "succeeded" ? undefined : (
        <BackdropLoading />
      )}
      <>
        <Section1 />
        <Section11 />
      </>
    </>
  );
}
