import authReducer from "./slice/authSlice";
import categoryReducer from "./slice/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import lotsReducer from "./slice/lotsSlice";
export default configureStore({
  reducer: {
    userAuth: authReducer,
    lots: lotsReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
