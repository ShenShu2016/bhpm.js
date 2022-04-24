/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 21:02:28
 * @FilePath: \bhpmJS\frontend\src\App.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Route, Routes } from "react-router-dom";

import AboutUs from "./pages/business_info/About-us";
import AlertTool from "./components/AlertTool";
import Amplify from "aws-amplify";
import AuctionsRouter from "./pages/auctions/AuctionsRouter";
import AuthRouter from "./pages/auth/AuthRouter";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import LotsRouter from "./pages/lots/LotsRouter";
import MuiTheme from "./theme/MuiTheme";
import Privacy from "./pages/business_info/Privacy";
import ProfileRouter from "./pages/profile/ProfileRouter";
import Rules from "./pages/business_info/Rules";
import Services from "./pages/business_info/Services";
import Teams from "./pages/business_info/Teams";
import Topbar from "./components/topbar/Topbar";
import awsconfig from "./aws-exports";
import { loadUser } from "./redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

Amplify.configure(awsconfig);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <MuiTheme>
      <Topbar />
      <AlertTool />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="auctions/*" element={<AuctionsRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
        <Route path="profile/*" element={<ProfileRouter />} />
        <Route path="lots/*" element={<LotsRouter />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="services" element={<Services />} />
        <Route path="teams" element={<Teams />} />
        <Route path="rules" element={<Rules />} />
      </Routes>
      <Footer />
    </MuiTheme>
  );
}
