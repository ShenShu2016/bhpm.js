/*
 * @Author: Shen Shu
 * @Date: 2022-04-28 13:10:12
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-28 13:37:34
 * @FilePath: \bhpmJS\frontend\src\redux\slice\auctionUserNumberSlice.js
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
  createAuctionUserNumber,
  updateAuctionUserNumber,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getAuctionUserNumber } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listAuctionUserNumbers } from "../../graphql/queries";

const auctionUserNumberAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = auctionUserNumberAdapter.getInitialState({
  fetchAuctionUserNumbersStatus: "idle",
  fetchAuctionUserNumbersError: null,
  selectedAuctionUserNumberStatus: "idle",
  selectedAuctionUserNumberError: null,
  postAuctionUserNumberStatus: "idle",
  postAuctionUserNumberError: null,
  postAuctionUserNumberImgStatus: "idle",
  postAuctionUserNumberImgError: null,
  updateAuctionUserNumberDetailStatus: "idle",
  updateAuctionUserNumberDetailError: null,
});

export const fetchAuctionUserNumbers = createAsyncThunk(
  "auctionUserNumber/fetchAuctionUserNumbers",
  async () => {
    try {
      const AuctionUserNumbersData = await API.graphql({
        query: listAuctionUserNumbers,
      });
      return AuctionUserNumbersData.data.listAuctionUserNumbers.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedAuctionUserNumber = createAsyncThunk(
  "auctionUserNumber/selectedAuctionUserNumber",
  async (id) => {
    const response = await API.graphql({
      query: getAuctionUserNumber,
    });
    // console.log("what?", response);
    if (response.data.getAuctionUserNumber === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getAuctionUserNumber;
  }
);

export const postAuctionUserNumber = createAsyncThunk(
  "auctionUserNumber/postAuctionUserNumber",
  async ({ createAuctionUserNumberInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createAuctionUserNumber, {
          input: createAuctionUserNumberInput,
        })
      );
      return response.data.createAuctionUserNumber;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateAuctionUserNumberDetail = createAsyncThunk(
  "auctionUserNumber/updateAuctionUserNumberDetail",
  async (updateAuctionUserNumberDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateAuctionUserNumber, {
        input: updateAuctionUserNumberDetail,
      })
    );
    return response.data.updateAuctionUserNumber;
  }
);

const auctionUserNumberSlice = createSlice({
  name: "auctionUserNumber",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchAuctionUserNumbers (pending, fulfilled, and rejected)
      .addCase(fetchAuctionUserNumbers.pending, (state, action) => {
        state.fetchAuctionUserNumbersStatus = "loading";
      })
      .addCase(fetchAuctionUserNumbers.fulfilled, (state, action) => {
        state.fetchAuctionUserNumbersStatus = "succeeded";
        auctionUserNumberAdapter.removeAll(state);
        auctionUserNumberAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAuctionUserNumbers.rejected, (state, action) => {
        state.fetchAuctionUserNumbersStatus = "failed";
        state.fetchAuctionUserNumbersError = action.error.message;
      })
      // Cases for status of selectedAuctionUserNumber (pending, fulfilled, and rejected)
      .addCase(selectedAuctionUserNumber.pending, (state, action) => {
        state.selectedAuctionUserNumberStatus = "loading";
      })
      .addCase(selectedAuctionUserNumber.fulfilled, (state, action) => {
        state.selectedAuctionUserNumberStatus = "succeeded";
        auctionUserNumberAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedAuctionUserNumber.rejected, (state, action) => {
        state.selectedAuctionUserNumberStatus = "failed";
        state.selectedAuctionUserNumberError = action.error.message;
      })
      // Cases for status of postAuctionUserNumber (pending, fulfilled, and rejected)
      .addCase(postAuctionUserNumber.pending, (state, action) => {
        state.postAuctionUserNumberStatus = "loading";
      })
      .addCase(postAuctionUserNumber.fulfilled, (state, action) => {
        state.postAuctionUserNumberStatus = "succeeded";
        // state.auctionUserNumbers.unshift(action.payload.data.createAuctionUserNumber);
        auctionUserNumberAdapter.addOne(state, action.payload);
        // state.postAuctionUserNumberStatus = "idle";
      })
      .addCase(postAuctionUserNumber.rejected, (state, action) => {
        state.postAuctionUserNumberStatus = "failed";
        state.postAuctionUserNumberError = action.error.message;
      })
      // Cases for status of updateAuctionUserNumber (pending, fulfilled, and rejected)
      .addCase(updateAuctionUserNumberDetail.pending, (state, action) => {
        state.updateAuctionUserNumberDetailStatus = "loading";
      })
      .addCase(updateAuctionUserNumberDetail.fulfilled, (state, action) => {
        state.updateAuctionUserNumberDetailStatus = "succeeded";
        // state.auctionUserNumbers.unshift(action.payload.data.createAuctionUserNumber);
        auctionUserNumberAdapter.upsertOne(state, action.payload);
        // state.updateAuctionUserNumberStatus = "idle";
      })
      .addCase(updateAuctionUserNumberDetail.rejected, (state, action) => {
        state.updateAuctionUserNumberDetailStatus = "failed";
        state.updateAuctionUserNumberDetailError = action.error.message;
      });
  },
});

export const { removeSelectedAuctionUserNumber } =
  auctionUserNumberSlice.actions;

export const {
  selectAll: selectAllAuctionUserNumbers,
  selectById: selectAuctionUserNumberById,
  selectIds: selectAuctionUserNumberIds,
} = auctionUserNumberAdapter.getSelectors((state) => state.auctionUserNumber);

export const selectMyAuctionUserNumber = ({ auctionId, username }) =>
  createSelector(selectAllAuctionUserNumbers, (auctionUserNumbers) => {
    let resultList = auctionUserNumbers.filter(
      (x) => x.auctionAuctionUserNumbersId === auctionId && x.owner === username
    );
    if (resultList.length === 1) {
      return resultList[0];
    } else {
      return null;
    }
  });

export default auctionUserNumberSlice.reducer;
