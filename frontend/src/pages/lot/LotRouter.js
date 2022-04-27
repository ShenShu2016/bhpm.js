/*
 * @Author: Shen Shu
 * @Date: 2022-04-02 21:29:21
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:56:38
 * @FilePath: \bhpmJS\frontend\src\pages\lot\LotRouter.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import Lot from "./Lot";
import React from "react";

export default function LotRouter() {
  return (
    <Routes>
      {/* <Route exact path="" element={<Authenticator />} /> */}
      <Route exact path="/:lotId" element={<Lot />} />
    </Routes>
  );
}
