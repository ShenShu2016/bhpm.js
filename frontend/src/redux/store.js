/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-22 23:14:06
 * @FilePath: \bhpmJS\frontend\src\redux\store.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import auctionUserLimitationReducer from "./slice/auctionUserLimitationSlice";
import auctionsReducer from "./slice/auctionsSlice";
import authReducer from "./slice/authSlice";
import bidItemHistoryReducer from "./slice/bidItemHistorySlice";
import categoryReducer from "./slice/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slice/generalSlice";
import homePageCarouseReducer from "./slice/homePageCarouseSlice";
import lotsReducer from "./slice/lotsSlice";
import myCollectionReducer from "./slice/myCollectionSlice";
import mySucceedBidReducer from "./slice/mySucceedBidSlice";
import profileReducer from "./slice/profileSlice";

export default configureStore({
  reducer: {
    userAuth: authReducer,
    profile: profileReducer,
    auctions: auctionsReducer,
    auctionUserLimitation: auctionUserLimitationReducer,
    mySucceedBid: mySucceedBidReducer,
    lots: lotsReducer,
    myCollection: myCollectionReducer,
    bidItemHistory: bidItemHistoryReducer,
    category: categoryReducer,
    general: generalReducer,
    homePageCarouse: homePageCarouseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
