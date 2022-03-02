/*

use this as bidItemHistory

replace BidItemHistory to Database table name example: BidItemHistory => Todo

replace BidItemHistory to Database table name Lower fist one example: bidItemHistory => todo

--and  replace the under two to store.js

import bidItemHistoryReducer from "./slice/bidItemHistorySlice";

bidItemHistory: bidItemHistoryReducer,

*/

import {
  bidItemHistorySortByCreatedAt,
  getBidItemHistory,
} from "../../graphql/queries";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createBidItemHistory,
  updateBidItemHistory,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const bidItemHistoryAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = bidItemHistoryAdapter.getInitialState({
  insertBidItemHistoryStatus: "idle",
  fetchBidItemHistoriesStatus: "idle",
  fetchBidItemHistoriesError: null,
  selectedBidItemHistoryStatus: "idle",
  selectedBidItemHistoryError: null,
  postBidItemHistoryStatus: "idle",
  postBidItemHistoryError: null,
  postBidItemHistoryImgStatus: "idle",
  postBidItemHistoryImgError: null,
  //updateBidItemHistoryDetailStatus: "idle",
  updateBidItemHistoryDetailError: null,
});

export const fetchBidItemHistories = createAsyncThunk(
  "bidItemHistory/fetchBidItemHistories",
  async ({ isAuthenticated, auctionsID }) => {
    try {
      const BidItemHistoriesData = await API.graphql({
        query: bidItemHistorySortByCreatedAt,
        variables: {
          auctionsID: auctionsID,
          sortDirection: "ASC",
        },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return BidItemHistoriesData.data.BidItemHistorySortByCreatedAt.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedBidItemHistory = createAsyncThunk(
  "bidItemHistory/selectedBidItemHistory",
  async (id) => {
    const response = await API.graphql({
      query: getBidItemHistory,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getBidItemHistory === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getBidItemHistory;
  }
);

export const postBidItemHistory = createAsyncThunk(
  "bidItemHistory/postBidItemHistory",
  async ({ createBidItemHistoryInput }) => {
    // try {
    const response = await API.graphql(
      graphqlOperation(createBidItemHistory, {
        input: createBidItemHistoryInput,
      })
    );
    console.log(response);
    return response.data.createBidItemHistory;
    // } catch (error) {
    //   return error;
    // }
  }
);

export const updateBidItemHistoryDetail = createAsyncThunk(
  "bidItemHistory/updateBidItemHistoryDetail",
  async (updateBidItemHistoryDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateBidItemHistory, {
        input: updateBidItemHistoryDetail,
      })
    );
    return response.data.updateBidItemHistory;
  }
);

const bidItemHistorySlice = createSlice({
  name: "bidItemHistory",
  initialState,
  reducers: {
    insertBidItemHistory(state, data) {
      bidItemHistoryAdapter.upsertOne(state, data);
      state.insertBidItemHistoryStatus = "succeeded";
    },
    removeAllBidItemHistories(state, data) {
      bidItemHistoryAdapter.removeAll(state);
      console.log("移除全部bidItemHistory");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchBidItemHistorys (pending, fulfilled, and rejected)
      .addCase(fetchBidItemHistories.pending, (state, action) => {
        state.fetchBidItemHistoriesStatus = "loading";
      })
      .addCase(fetchBidItemHistories.fulfilled, (state, action) => {
        state.fetchBidItemHistoriesStatus = "succeeded";
        bidItemHistoryAdapter.removeAll(state);
        bidItemHistoryAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBidItemHistories.rejected, (state, action) => {
        state.fetchBidItemHistoriesStatus = "failed";
        state.fetchBidItemHistoriesError = action.error.message;
      })
      // Cases for status of selectedBidItemHistory (pending, fulfilled, and rejected)
      .addCase(selectedBidItemHistory.pending, (state, action) => {
        state.selectedBidItemHistoryStatus = "loading";
      })
      .addCase(selectedBidItemHistory.fulfilled, (state, action) => {
        state.selectedBidItemHistoryStatus = "succeeded";
        bidItemHistoryAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedBidItemHistory.rejected, (state, action) => {
        state.selectedBidItemHistoryStatus = "failed";
        state.selectedBidItemHistoryError = action.error.message;
      })
      // Cases for status of postBidItemHistory (pending, fulfilled, and rejected)
      .addCase(postBidItemHistory.pending, (state, action) => {
        state.postBidItemHistoryStatus = "loading";
      })
      .addCase(postBidItemHistory.fulfilled, (state, action) => {
        state.postBidItemHistoryStatus = "succeeded";
        // state.bidItemHistorys.unshift(action.payload.data.createBidItemHistory);
        bidItemHistoryAdapter.upsertOne(state, action.payload);
        // state.postBidItemHistoryStatus = "idle";
      })
      .addCase(postBidItemHistory.rejected, (state, action) => {
        state.postBidItemHistoryStatus = "failed";
        state.postBidItemHistoryError = action.error.message;
      })
      // Cases for status of updateBidItemHistory (pending, fulfilled, and rejected)
      .addCase(updateBidItemHistoryDetail.pending, (state, action) => {
        state.updateBidItemHistoryDetailStatus = "loading";
      })
      .addCase(updateBidItemHistoryDetail.fulfilled, (state, action) => {
        state.updateBidItemHistoryDetailStatus = "succeeded";
        // state.bidItemHistorys.unshift(action.payload.data.createBidItemHistory);
        bidItemHistoryAdapter.upsertOne(state, action.payload);
        // state.updateBidItemHistoryStatus = "idle";
      })
      .addCase(updateBidItemHistoryDetail.rejected, (state, action) => {
        state.updateBidItemHistoryDetailStatus = "failed";
        state.updateBidItemHistoryDetailError = action.error.message;
      });
  },
});

export const { removeAllBidItemHistories } = bidItemHistorySlice.actions;
export const { insertBidItemHistory } = bidItemHistorySlice.actions;
export const {
  selectAll: selectAllBidItemHistories,
  selectById: selectBidItemHistoryById,
  selectIds: selectBidItemHistoryIds,
} = bidItemHistoryAdapter.getSelectors((state) => state.bidItemHistory);

export default bidItemHistorySlice.reducer;
