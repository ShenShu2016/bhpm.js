import auctionUserLimitationReducer from "./slice/auctionUserLimitationSlice";
import auctionsReducer from "./slice/auctionsSlice";
import authReducer from "./slice/authSlice";
import bidItemHistoryReducer from "./slice/bidItemHistorySlice";
import categoryReducer from "./slice/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import lotsReducer from "./slice/lotsSlice";
import mySucceedBidReducer from "./slice/mySucceedBidSlice";
import profileReducer from "./slice/profileSlice";
import myCollectionReducer from "./slice/myCollectionSlice";

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
