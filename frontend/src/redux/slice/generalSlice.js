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
        }
    },
})

export const { setAlert,removeAlert,setLanguage } = generalSlice.actions;

export default generalSlice.reducer;