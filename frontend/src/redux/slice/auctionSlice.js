/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-28 17:04:59
 * @FilePath: \bhpmJS\frontend\src\redux\slice\auctionSlice.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createAuction, updateAuction } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getAuction } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listAuctions } from "../../graphql_custom/_queries";

const auctionAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = auctionAdapter.getInitialState({
  fetchAuctionsStatus: "idle",
  fetchAuctionsError: null,
  selectedAuctionStatus: "idle",
  selectedAuctionError: null,
  postAuctionStatus: "idle",
  postAuctionError: null,
  postAuctionImgStatus: "idle",
  postAuctionImgError: null,
  updateAuctionDetailStatus: "idle",
  updateAuctionDetailError: null,
});

export const fetchAuctions = createAsyncThunk(
  "auction/fetchAuctions",
  async ({ isAuthenticated }) => {
    try {
      const AuctionsData = await API.graphql({
        query: listAuctions,
        variables: { active: true, limit: 1 },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return AuctionsData.data.listAuctions.items;
    } catch (error) {
      console.log(error);
      return error.data.listAuctions.items;
    }
  }
);

export const selectedAuction = createAsyncThunk(
  "auction/selectedAuction",

  async ({ isAuthenticated, auctionId }) => {
    try {
      const response = await API.graphql({
        query: getAuction,
        variables: { id: auctionId },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      // console.log("what?", response);
      return response.data.getAuction;
    } catch (error) {
      console.log(error);
      return error.data.getAuction;
    }
  }
);

export const postAuction = createAsyncThunk(
  "auction/postAuction",
  async ({ createAuctionInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createAuction, { input: createAuctionInput })
      );
      return response.data.createAuction;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateAuctionDetail = createAsyncThunk(
  "auction/updateAuctionDetail",
  async (updateAuctionDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateAuction, { input: updateAuctionDetail })
    );
    return response.data.updateAuction;
  }
);

const auctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchAuctions (pending, fulfilled, and rejected)
      .addCase(fetchAuctions.pending, (state, action) => {
        state.fetchAuctionsStatus = "loading";
      })
      .addCase(fetchAuctions.fulfilled, (state, action) => {
        state.fetchAuctionsStatus = "succeeded";
        auctionAdapter.removeAll(state);
        auctionAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAuctions.rejected, (state, action) => {
        state.fetchAuctionsStatus = "failed";
        state.fetchAuctionsError = action.error.message;
      })
      // Cases for status of selectedAuction (pending, fulfilled, and rejected)
      .addCase(selectedAuction.pending, (state, action) => {
        state.selectedAuctionStatus = "loading";
      })
      .addCase(selectedAuction.fulfilled, (state, action) => {
        state.selectedAuctionStatus = "succeeded";
        auctionAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedAuction.rejected, (state, action) => {
        state.selectedAuctionStatus = "failed";
        state.selectedAuctionError = action.error.message;
      })
      // Cases for status of postAuction (pending, fulfilled, and rejected)
      .addCase(postAuction.pending, (state, action) => {
        state.postAuctionStatus = "loading";
      })
      .addCase(postAuction.fulfilled, (state, action) => {
        state.postAuctionStatus = "succeeded";
        // state.auctions.unshift(action.payload.data.createAuction);
        auctionAdapter.addOne(state, action.payload);
        // state.postAuctionStatus = "idle";
      })
      .addCase(postAuction.rejected, (state, action) => {
        state.postAuctionStatus = "failed";
        state.postAuctionError = action.error.message;
      })
      // Cases for status of updateAuction (pending, fulfilled, and rejected)
      .addCase(updateAuctionDetail.pending, (state, action) => {
        state.updateAuctionDetailStatus = "loading";
      })
      .addCase(updateAuctionDetail.fulfilled, (state, action) => {
        state.updateAuctionDetailStatus = "succeeded";
        // state.auctions.unshift(action.payload.data.createAuction);
        auctionAdapter.upsertOne(state, action.payload);
        // state.updateAuctionStatus = "idle";
      })
      .addCase(updateAuctionDetail.rejected, (state, action) => {
        state.updateAuctionDetailStatus = "failed";
        state.updateAuctionDetailError = action.error.message;
      });
  },
});

export const { removeSelectedAuction } = auctionSlice.actions;

export const {
  selectAll: selectAllAuctions,
  selectById: selectAuctionById,
  selectIds: selectAuctionIds,
} = auctionAdapter.getSelectors((state) => state.auction);

export default auctionSlice.reducer;
