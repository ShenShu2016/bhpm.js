/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 00:22:50
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
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import Section1 from "../../components/fashion-shop/Section1";
import Section11 from "../../components/fashion-shop/Section11";
import { fetchHomePageCarouses } from "../../redux/slice/homePageCarouseSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const auctionss = useSelector(selectAllAuctionss);
  const lotss = useSelector(selectAllLotss);

  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(fetchAuctionss({ isAuthenticated }));
      dispatch(fetchHomePageCarouses({ isAuthenticated }));
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated !== null && auctionss[0]?.id) {
      dispatch(
        fetchLotss({
          isAuthenticated,
          auctionsID: auctionss[0].id,
        })
      );
    }
  }, [dispatch, isAuthenticated, auctionss]);

  const moreItemsRenderList = lotss.map((lot) => {
    return {
      auctionItemID: lot.auctionItemID,
      price: lot.estimatedPriceMax,
      title: lot.auctionItem.title,
      imgUrl: lot.auctionItem.imgUrls[0],
      category: lot.auctionItem.categoryID,
      id: lot.id,
      startingPrice: lot.startingPrice,
      lotNum: lot.lot,
    };
  });

  return (
    <>
      <Section1 />
      <Section11 moreItems={moreItemsRenderList} />
      {/* <Section12 /> */}
    </>
  );
}
