/*
 * @Author: Shen Shu
 * @Date: 2022-04-22 23:13:12
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 00:06:24
 * @FilePath: \bhpmJS\frontend\src\redux\slice\homePageCarouseSlice.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
/*

use this as homePageCarouse

replace HomePageCarouse to Database table name example: HomePageCarouse => Todo

replace HomePageCarouse to Database table name Lower fist one example: homePageCarouse => todo

--and  replace the under two to store.js

import homePageCarouseReducer from "./slice/homePageCarouseSlice";

homePageCarouse: homePageCarouseReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createHomePageCarouse,
  updateHomePageCarouse,
} from "../../graphql/mutations";
import {
  getHomePageCarouse,
  listHomePageCarouses,
} from "../../graphql/queries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const homePageCarouseAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = homePageCarouseAdapter.getInitialState({
  fetchHomePageCarousesStatus: "idle",
  fetchHomePageCarousesError: null,
  selectedHomePageCarouseStatus: "idle",
  selectedHomePageCarouseError: null,
  postHomePageCarouseStatus: "idle",
  postHomePageCarouseError: null,
  postHomePageCarouseImgStatus: "idle",
  postHomePageCarouseImgError: null,
  updateHomePageCarouseDetailStatus: "idle",
  updateHomePageCarouseDetailError: null,
});

export const fetchHomePageCarouses = createAsyncThunk(
  "homePageCarouse/fetchHomePageCarouses",
  async ({ isAuthenticated }) => {
    try {
      const HomePageCarousesData = await API.graphql({
        query: listHomePageCarouses,
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return HomePageCarousesData.data.listHomePageCarouses.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedHomePageCarouse = createAsyncThunk(
  "homePageCarouse/selectedHomePageCarouse",
  async (id) => {
    const response = await API.graphql({
      query: getHomePageCarouse,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getHomePageCarouse === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getHomePageCarouse;
  }
);

export const postHomePageCarouse = createAsyncThunk(
  "homePageCarouse/postHomePageCarouse",
  async ({ createHomePageCarouseInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createHomePageCarouse, {
          input: createHomePageCarouseInput,
        })
      );
      return response.data.createHomePageCarouse;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateHomePageCarouseDetail = createAsyncThunk(
  "homePageCarouse/updateHomePageCarouseDetail",
  async (updateHomePageCarouseDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateHomePageCarouse, {
        input: updateHomePageCarouseDetail,
      })
    );
    return response.data.updateHomePageCarouse;
  }
);

const homePageCarouseSlice = createSlice({
  name: "homePageCarouse",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchHomePageCarouses (pending, fulfilled, and rejected)
      .addCase(fetchHomePageCarouses.pending, (state, action) => {
        state.fetchHomePageCarousesStatus = "loading";
      })
      .addCase(fetchHomePageCarouses.fulfilled, (state, action) => {
        state.fetchHomePageCarousesStatus = "succeeded";
        homePageCarouseAdapter.removeAll(state);
        homePageCarouseAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchHomePageCarouses.rejected, (state, action) => {
        state.fetchHomePageCarousesStatus = "failed";
        state.fetchHomePageCarousesError = action.error.message;
      })
      // Cases for status of selectedHomePageCarouse (pending, fulfilled, and rejected)
      .addCase(selectedHomePageCarouse.pending, (state, action) => {
        state.selectedHomePageCarouseStatus = "loading";
      })
      .addCase(selectedHomePageCarouse.fulfilled, (state, action) => {
        state.selectedHomePageCarouseStatus = "succeeded";
        homePageCarouseAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedHomePageCarouse.rejected, (state, action) => {
        state.selectedHomePageCarouseStatus = "failed";
        state.selectedHomePageCarouseError = action.error.message;
      })
      // Cases for status of postHomePageCarouse (pending, fulfilled, and rejected)
      .addCase(postHomePageCarouse.pending, (state, action) => {
        state.postHomePageCarouseStatus = "loading";
      })
      .addCase(postHomePageCarouse.fulfilled, (state, action) => {
        state.postHomePageCarouseStatus = "succeeded";
        // state.homePageCarouses.unshift(action.payload.data.createHomePageCarouse);
        homePageCarouseAdapter.addOne(state, action.payload);
        // state.postHomePageCarouseStatus = "idle";
      })
      .addCase(postHomePageCarouse.rejected, (state, action) => {
        state.postHomePageCarouseStatus = "failed";
        state.postHomePageCarouseError = action.error.message;
      })
      // Cases for status of updateHomePageCarouse (pending, fulfilled, and rejected)
      .addCase(updateHomePageCarouseDetail.pending, (state, action) => {
        state.updateHomePageCarouseDetailStatus = "loading";
      })
      .addCase(updateHomePageCarouseDetail.fulfilled, (state, action) => {
        state.updateHomePageCarouseDetailStatus = "succeeded";
        // state.homePageCarouses.unshift(action.payload.data.createHomePageCarouse);
        homePageCarouseAdapter.upsertOne(state, action.payload);
        // state.updateHomePageCarouseStatus = "idle";
      })
      .addCase(updateHomePageCarouseDetail.rejected, (state, action) => {
        state.updateHomePageCarouseDetailStatus = "failed";
        state.updateHomePageCarouseDetailError = action.error.message;
      });
  },
});

export const { removeSelectedHomePageCarouse } = homePageCarouseSlice.actions;

export const {
  selectAll: selectAllHomePageCarouses,
  selectById: selectHomePageCarouseById,
  selectIds: selectHomePageCarouseIds,
} = homePageCarouseAdapter.getSelectors((state) => state.homePageCarouse);

export default homePageCarouseSlice.reducer;
