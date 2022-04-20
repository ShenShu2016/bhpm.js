import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import API from "@aws-amplify/api";
//import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
    alert: false,
    setAlertStatus: "idle",
    setAlertError: null,
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
    }
})

export default generalSlice.reducer;