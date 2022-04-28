/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-28 13:29:05
 * @FilePath: \bhpmJS\frontend\src\redux\slice\lotSlice.js
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
import { createLot, updateLot } from "../../graphql/mutations";
import {
  lotSortByLotOrder_isAuth,
  lotSortByLotOrder_noAuth,
} from "../../graphql_custom/_queries";

import API from "@aws-amplify/api";
import { getLot } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const lotAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  // sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = lotAdapter.getInitialState({
  fetchLotsStatus: "idle",
  fetchLotsError: null,
  selectedLotStatus: "idle",
  selectedLotError: null,
  postLotStatus: "idle",
  postLotError: null,
  postLotImgStatus: "idle",
  postLotImgError: null,
  updateLotDetailStatus: "idle",
  updateLotDetailError: null,
});

export const fetchLots = createAsyncThunk(
  "lot/fetchLots",
  async ({ isAuthenticated, auctionId, username }) => {
    //console.log("isAuthenticated,  auctionId", isAuthenticated,  auctionId);
    try {
      const LotData = await API.graphql({
        query: username ? lotSortByLotOrder_isAuth : lotSortByLotOrder_noAuth,
        variables: {
          auctionLotId: auctionId,
          sortDirection: "ASC",
          limit: 300,
          username: username,
        },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return LotData.data.lotSortByLotOrder.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedLot = createAsyncThunk(
  "lot/selectedLot",
  async ({ isAuthenticated, lotId }) => {
    try {
      const response = await API.graphql({
        query: getLot,
        variables: { id: lotId },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      // console.log("what?", response);
      return response.data.getLot;
    } catch (error) {
      console.log(error);
      return error.data.getLot;
    }
  }
);

export const postLot = createAsyncThunk(
  "lot/postLot",
  async ({ createLotInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createLot, { input: createLotInput })
      );
      return response.data.createLot;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateLotDetail = createAsyncThunk(
  "lot/updateLotDetail",
  async (updateLotDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateLot, { input: updateLotDetail })
    );
    return response.data.updateLot;
  }
);

const lotSlice = createSlice({
  name: "lot",
  initialState,
  reducers: {
    updateLotDetailBySub(state, data) {
      lotAdapter.upsertOne(state, data);
      state.insertBidHistoryStatus = "succeeded";
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchLots (pending, fulfilled, and rejected)
      .addCase(fetchLots.pending, (state, action) => {
        state.fetchLotsStatus = "loading";
      })
      .addCase(fetchLots.fulfilled, (state, action) => {
        state.fetchLotsStatus = "succeeded";
        lotAdapter.removeAll(state);
        lotAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchLots.rejected, (state, action) => {
        state.fetchLotsStatus = "failed";
        state.fetchLotsError = action.error.message;
      })
      // Cases for status of selectedLot (pending, fulfilled, and rejected)
      .addCase(selectedLot.pending, (state, action) => {
        state.selectedLotStatus = "loading";
      })
      .addCase(selectedLot.fulfilled, (state, action) => {
        state.selectedLotStatus = "succeeded";
        lotAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedLot.rejected, (state, action) => {
        state.selectedLotStatus = "failed";
        state.selectedLotError = action.error.message;
      })
      // Cases for status of postLot (pending, fulfilled, and rejected)
      .addCase(postLot.pending, (state, action) => {
        state.postLotStatus = "loading";
      })
      .addCase(postLot.fulfilled, (state, action) => {
        state.postLotStatus = "succeeded";
        // state.lots.unshift(action.payload.data.createLot);
        lotAdapter.addOne(state, action.payload);
        // state.postLotStatus = "idle";
      })
      .addCase(postLot.rejected, (state, action) => {
        state.postLotStatus = "failed";
        state.postLotError = action.error.message;
      })
      // Cases for status of updateLot (pending, fulfilled, and rejected)
      .addCase(updateLotDetail.pending, (state, action) => {
        state.updateLotDetailStatus = "loading";
      })
      .addCase(updateLotDetail.fulfilled, (state, action) => {
        state.updateLotDetailStatus = "succeeded";
        // state.lots.unshift(action.payload.data.createLot);
        lotAdapter.upsertOne(state, action.payload);
        // state.updateLotStatus = "idle";
      })
      .addCase(updateLotDetail.rejected, (state, action) => {
        state.updateLotDetailStatus = "failed";
        state.updateLotDetailError = action.error.message;
      });
  },
});

export const { removeSelectedLot } = lotSlice.actions;
export const { updateLotDetailBySub } = lotSlice.actions;
export const {
  selectAll: selectAllLots,
  selectById: selectLotById,
  selectIds: selectLotIds,
} = lotAdapter.getSelectors((state) => state.lot);

export const selectLotByInProgress = () =>
  createSelector(selectAllLots, (lot) => {
    let resultArr = lot.filter((x) => x.lotStatus === "InProgress");
    if (resultArr.length === 1) {
      return resultArr[0];
    } else {
      return null;
    }
  });

export const selectLotByNextLotNumber = ({ lotOrder }) =>
  createSelector(selectAllLots, (lot) => {
    return lot.filter((x) => x.lotOrder === lotOrder);
  });

export const selectLotByLotOrder = ({ lotOrder }) =>
  createSelector(selectAllLots, (lot) => {
    let resultArr = lot.filter((x) => x.lotOrder === lotOrder);
    if (resultArr.length === 1) {
      return resultArr[0];
    } else {
      return null;
    }
  });

export default lotSlice.reducer;
