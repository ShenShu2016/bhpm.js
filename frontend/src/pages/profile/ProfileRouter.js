/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:18:13
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-26 15:27:14
 * @FilePath: \bhpmJS\frontend\src\pages\profile\ProfileRouter.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import MyFavorite from "./MyFavorite";
import Profile from "./Profile";
import ProfileCreator from "./ProfileCreator";
import React from "react";

export default function ProfileRouter() {
  return (
    <Routes>
      <Route exact path="" element={<Profile />} />
      <Route exact path="/create" element={<ProfileCreator />} />
      <Route exact path="/MyFavorite" element={<MyFavorite />} />
    </Routes>
  );
}
