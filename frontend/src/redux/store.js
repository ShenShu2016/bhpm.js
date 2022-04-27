/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 10:33:31
 * @FilePath: \bhpmJS\frontend\src\redux\store.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import auctionReducer from "./slice/auctionSlice";
import auctionUserLimitationReducer from "./slice/auctionUserLimitationSlice";
import authReducer from "./slice/authSlice";
import bidHistoryReducer from "./slice/bidHistorySlice";
import categoryReducer from "./slice/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slice/generalSlice";
import homePageCarouseReducer from "./slice/homePageCarouseSlice";
import lotReducer from "./slice/lotSlice";
import myFavoriteReducer from "./slice/myFavoriteSlice";
import mySucceedBidReducer from "./slice/mySucceedBidSlice";
import profileReducer from "./slice/profileSlice";

export default configureStore({
  reducer: {
    general: generalReducer,
    userAuth: authReducer,
    profile: profileReducer,
    mySucceedBid: mySucceedBidReducer,
    myFavorite: myFavoriteReducer,
    homePageCarouse: homePageCarouseReducer,
    auction: auctionReducer,
    category: categoryReducer,
    lot: lotReducer,
    auctionUserLimitation: auctionUserLimitationReducer,
    bidHistory: bidHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
