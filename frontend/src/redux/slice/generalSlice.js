/*
 * @Author: Quennel
 * @Date: 2022-04-20 16:26:48
 * @LastEditTime: 2022-04-25 21:30:46
 * @LastEditors: Quennel
 * @Description: 
 * @FilePath: /bhpmJS/frontend/src/redux/slice/generalSlice.js
 * Quennel
 */
import {  createSlice } from "@reduxjs/toolkit";
//import API from "@aws-amplify/api";
//import { graphqlOperation } from "@aws-amplify/api-graphql";

const languageList = [
    {
      title: "en",
      imgUrl: "/assets/images/flags/usa.png",
    },
    {
      title: "中文",
      imgUrl: "/assets/images/flags/bd.png",
    },
  ];

const initialState = {
    alert: false,
    language: languageList[0],
    languageList: languageList,
    snackBar: {isOpen: false, isSuccess: null, sentence: null},
    // setLanguageStatus: "idle",
    // setLanguageError: null,
    // setAlertStatus: "idle",
    // setAlertError: null,
    // changeLanguageStatus: "idle",
    // changeLanguageError: null,
    // removeAlertStatus: "idle",
    // removeAlertError: null,
}

const generalSlice = createSlice({
    name:"general",
    initialState,
    reducers:{
        setAlert(state,action){
            state.alert = true;
        },
        removeAlert(state,action){
            state.alert = false;
            console.log("remove Alert");
        },
        setLanguage(state,action){
            console.log(action);
            state.language = action.payload;
        },
        setSnackBar(state,action){
            console.log(action);
            state.snackBar = action.payload;
        },
        removeSnackBar(state,action){
            console.log(action);
            state.snackBar = action.payload;
        }
    },
})

export const { setAlert,removeAlert,setLanguage,setSnackBar,removeSnackBar } = generalSlice.actions;

export default generalSlice.reducer;