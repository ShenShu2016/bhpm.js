/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 15:23:04
 * @FilePath: \bhpmJS\frontend\src\pages\auctions\AuctionsRouter.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Route, Routes } from "react-router-dom";

import Auctions from "./Auctions";
import Bidding from "./bidding/Bidding";
import React from "react";

export default function AuctionsRouter() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Auctions />} />
        <Route exact path="/bidding/:auctionId" element={<Bidding />} />
      </Routes>
    </>
  );
}
