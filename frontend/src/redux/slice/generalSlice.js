import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    setLanguageStatus: "idle",
    setLanguageError: null,
    setAlertStatus: "idle",
    setAlertError: null,
    changeLanguageStatus: "idle",
    changeLanguageError: null,
    removeAlertStatus: "idle",
    removeAlertError: null,
}

export const setAlert = createAsyncThunk(
    "general/setAlert",
    async () => {
        return true;
    }
)
export const removeAlert = createAsyncThunk(
    "general/removeAlert",
    async () => {
        return false;
    }
)
export const setLanguage = createAsyncThunk(
    "general/setLanguage",
    async (lang) => {
        return lang;
    }
)

const generalSlice = createSlice({
    name:"general",
    initialState,
    reducers:{
        removeAlert(state,action){
            state.alert = false;
            console.log("remove Alert");
        },
    },
    extraReducers(builder){
        builder
        //Cases for status of setAlert(pending, fulfilled, and rejected)
        .addCase(setAlert.pending,(state,action) => {
            state.setAlertStatus = "loading";
        })
        .addCase(setAlert.fulfilled,(state,action) => {
            state.setAlertStatus = "succeeded";
            state.alert= action.payload;
        })
        .addCase(setAlert.rejected,(state,action) => {
            state.setAlertStatus = "failed";
            state.setAlertError = action.error.message;
        })
        .addCase(removeAlert.pending,(state,action) => {
            state.removeAlertStatus = "loading";
        })
        .addCase(removeAlert.fulfilled,(state,action) => {
            state.removeAlertStatus = "succeeded";
            state.alert = action.payload;
        })
        .addCase(removeAlert.rejected,(state,action) => {
            state.removeAlertStatus = "failed";
            state.removeAlertError = action.error.message;
        })
        .addCase(setLanguage.pending,(state,action) => {
            state.setLanguageStatus = "loading";
        })
        .addCase(setLanguage.fulfilled,(state,action) => {
            state.setLanguageStatus = "succeeded";
            state.language= action.payload;
        })
        .addCase(setLanguage.rejected,(state,action) => {
            state.setLanguageStatus = "failed";
            state.setLanguageError = action.error.message;
        })
    }
})

export default generalSlice.reducer;