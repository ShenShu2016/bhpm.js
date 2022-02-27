import categoryReducer from "./slice/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //devTools: process.env.NODE_ENV === "dev",
});
