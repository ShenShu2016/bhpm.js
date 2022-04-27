/*
 * @Author: Shen Shu
 * @Date: 2022-04-02 21:29:21
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 12:40:32
 * @FilePath: \bhpmJS\frontend\src\pages\lots\LotsRouter.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import Lots from "./Lots";
import React from "react";

export default function LotsRouter() {
  return (
    <Routes>
      {/* <Route exact path="" element={<Authenticator />} /> */}
      <Route exact path="/:lotId" element={<Lots />} />
    </Routes>
  );
}
