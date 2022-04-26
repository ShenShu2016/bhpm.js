/*
 * @Author: Quennel
 * @Date: 2022-04-20 16:26:48
 * @LastEditTime: 2022-04-25 21:14:17
 * @LastEditors: Shen Shu
 * @Description:
 * @FilePath: \bhpmJS\frontend\src\redux\slice\generalSlice.js
 * Quennel
 */

import { createSlice } from "@reduxjs/toolkit";

const languageList = [
  {
    title: "en",
    currentLanguage: "en-us",
  },
  {
    title: "中文",
    currentLanguage: "zh-hk",
  },
];

const initialState = {
  alert: false,
  language: languageList[0],
  languageList: languageList,
  snackBar: { isOpen: false, isSuccess: null, sentence: null },
  // setLanguageStatus: "idle",
  // setLanguageError: null,
  // setAlertStatus: "idle",
  // setAlertError: null,
  // changeLanguageStatus: "idle",
  // changeLanguageError: null,
  // removeAlertStatus: "idle",
  // removeAlertError: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alert = true;
    },
    removeAlert(state, action) {
      state.alert = false;
      console.log("remove Alert");
    },
    setLanguage(state, action) {
      console.log(action);
      state.language = action.payload;
    },
    setSnackBar(state, action) {
      console.log(action);
      state.snackBar = action.payload;
    },
    removeSnackBar(state, action) {
      console.log(action);
      state.snackBar = action.payload;
    },
  },
});

export const {
  setAlert,
  removeAlert,
  setLanguage,
  setSnackBar,
  removeSnackBar,
} = generalSlice.actions;

export default generalSlice.reducer;
