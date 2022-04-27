/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:56:53
 * @FilePath: \bhpmJS\frontend\src\pages\auctions\AuctionRouter.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Route, Routes } from "react-router-dom";

import Auction from "./Auction";
import Bidding from "./bidding/Bidding";
import React from "react";

export default function AuctionRouter() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Auction />} />
        <Route exact path="/bidding/:auctionId" element={<Bidding />} />
      </Routes>
    </>
  );
}
