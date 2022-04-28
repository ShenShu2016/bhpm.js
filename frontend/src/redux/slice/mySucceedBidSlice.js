/*
 * @Author: Shen Shu
 * @Date: 2022-04-18 00:03:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-28 17:04:45
 * @FilePath: \bhpmJS\frontend\src\redux\slice\mySucceedBidSlice.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createMySucceedBid,
  updateMySucceedBid,
} from "../../graphql/mutations";
import { getMySucceedBid, listMySucceedBids } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const mySucceedBidAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = mySucceedBidAdapter.getInitialState({
  fetchMySucceedBidsStatus: "idle",
  fetchMySucceedBidsError: null,
  selectedMySucceedBidStatus: "idle",
  selectedMySucceedBidError: null,
  postMySucceedBidStatus: "idle",
  postMySucceedBidError: null,
  postMySucceedBidImgStatus: "idle",
  postMySucceedBidImgError: null,
  updateMySucceedBidDetailStatus: "idle",
  updateMySucceedBidDetailError: null,
});

export const fetchMySucceedBids = createAsyncThunk(
  "mySucceedBid/fetchMySucceedBids",
  async () => {
    try {
      const MySucceedBidsData = await API.graphql({
        query: listMySucceedBids,
      });
      return MySucceedBidsData.data.listMySucceedBids.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedMySucceedBid = createAsyncThunk(
  "mySucceedBid/selectedMySucceedBid",
  async (id) => {
    const response = await API.graphql({
      query: getMySucceedBid,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getMySucceedBid === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getMySucceedBid;
  }
);

export const postMySucceedBid = createAsyncThunk(
  "mySucceedBid/postMySucceedBid",
  async ({ createMySucceedBidInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createMySucceedBid, { input: createMySucceedBidInput })
      );
      return response.data.createMySucceedBid;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateMySucceedBidDetail = createAsyncThunk(
  "mySucceedBid/updateMySucceedBidDetail",
  async (updateMySucceedBidDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateMySucceedBid, { input: updateMySucceedBidDetail })
    );
    return response.data.updateMySucceedBid;
  }
);

const mySucceedBidSlice = createSlice({
  name: "mySucceedBid",
  initialState,
  reducers: {
    insertMySucceedBid(state, data) {
      mySucceedBidAdapter.upsertOne(state, data);
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchMySucceedBids (pending, fulfilled, and rejected)
      .addCase(fetchMySucceedBids.pending, (state, action) => {
        state.fetchMySucceedBidsStatus = "loading";
      })
      .addCase(fetchMySucceedBids.fulfilled, (state, action) => {
        state.fetchMySucceedBidsStatus = "succeeded";
        mySucceedBidAdapter.removeAll(state);
        mySucceedBidAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchMySucceedBids.rejected, (state, action) => {
        state.fetchMySucceedBidsStatus = "failed";
        state.fetchMySucceedBidsError = action.error.message;
      })
      // Cases for status of selectedMySucceedBid (pending, fulfilled, and rejected)
      .addCase(selectedMySucceedBid.pending, (state, action) => {
        state.selectedMySucceedBidStatus = "loading";
      })
      .addCase(selectedMySucceedBid.fulfilled, (state, action) => {
        state.selectedMySucceedBidStatus = "succeeded";
        mySucceedBidAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedMySucceedBid.rejected, (state, action) => {
        state.selectedMySucceedBidStatus = "failed";
        state.selectedMySucceedBidError = action.error.message;
      })
      // Cases for status of postMySucceedBid (pending, fulfilled, and rejected)
      .addCase(postMySucceedBid.pending, (state, action) => {
        state.postMySucceedBidStatus = "loading";
      })
      .addCase(postMySucceedBid.fulfilled, (state, action) => {
        state.postMySucceedBidStatus = "succeeded";
        // state.mySucceedBids.unshift(action.payload.data.createMySucceedBid);
        mySucceedBidAdapter.addOne(state, action.payload);
        // state.postMySucceedBidStatus = "idle";
      })
      .addCase(postMySucceedBid.rejected, (state, action) => {
        state.postMySucceedBidStatus = "failed";
        state.postMySucceedBidError = action.error.message;
      })
      // Cases for status of updateMySucceedBid (pending, fulfilled, and rejected)
      .addCase(updateMySucceedBidDetail.pending, (state, action) => {
        state.updateMySucceedBidDetailStatus = "loading";
      })
      .addCase(updateMySucceedBidDetail.fulfilled, (state, action) => {
        state.updateMySucceedBidDetailStatus = "succeeded";
        // state.mySucceedBids.unshift(action.payload.data.createMySucceedBid);
        mySucceedBidAdapter.upsertOne(state, action.payload);
        // state.updateMySucceedBidStatus = "idle";
      })
      .addCase(updateMySucceedBidDetail.rejected, (state, action) => {
        state.updateMySucceedBidDetailStatus = "failed";
        state.updateMySucceedBidDetailError = action.error.message;
      });
  },
});

export const { removeSelectedMySucceedBid } = mySucceedBidSlice.actions;
export const { insertMySucceedBid } = mySucceedBidSlice.actions;
export const {
  selectAll: selectAllMySucceedBids,
  selectById: selectMySucceedBidById,
  selectIds: selectMySucceedBidIds,
} = mySucceedBidAdapter.getSelectors((state) => state.mySucceedBid);

export const selectTotalPriceMySucceedBids = () =>
  createSelector(selectAllMySucceedBids, (mySucceedBids) => {
    let result = mySucceedBids.reduce(
      (accumulator, current) => accumulator + current.bidHistory.bidPrice,
      0
    );
    return result;
  });

export default mySucceedBidSlice.reducer;
