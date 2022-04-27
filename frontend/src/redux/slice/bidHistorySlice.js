/*

use this as bidHistory

replace BidHistory to Database table name example: BidHistory => Todo

replace BidHistory to Database table name Lower fist one example: bidHistory => todo

--and  replace the under two to store.js

import bidHistoryReducer from "./slice/bidHistorySlice";

bidHistory: bidHistoryReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { createBidHistory, updateBidHistory } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { bidHistorySortByCreatedAt } from "../../graphql_custom/_queries";
import { getBidHistory } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const bidHistoryAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => a.updatedAt.localeCompare(b.updatedAt),
});

const initialState = bidHistoryAdapter.getInitialState({
  insertBidHistoryStatus: "idle",
  fetchBidHistoriesStatus: "idle",
  fetchBidHistoriesError: null,
  selectedBidHistoryStatus: "idle",
  selectedBidHistoryError: null,
  postBidHistoryStatus: "idle",
  postBidHistoryError: null,
  postBidHistoryImgStatus: "idle",
  postBidHistoryImgError: null,
  //updateBidHistoryDetailStatus: "idle",
  updateBidHistoryDetailError: null,
});

export const fetchBidHistories = createAsyncThunk(
  "bidHistory/fetchBidHistories",
  async ({ isAuthenticated, auctionId }) => {
    try {
      const BidHistoriesData = await API.graphql({
        query: bidHistorySortByCreatedAt,
        variables: {
          auctionBidHistoriesId: auctionId,
          sortDirection: "DESC",
          limit: 2000,
        },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return BidHistoriesData.data.BidHistorySortByCreatedAt.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedBidHistory = createAsyncThunk(
  "bidHistory/selectedBidHistory",
  async (id) => {
    const response = await API.graphql({
      query: getBidHistory,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getBidHistory === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getBidHistory;
  }
);

export const postBidHistory = createAsyncThunk(
  "bidHistory/postBidHistory",
  async ({ createBidHistoryInput }) => {
    console.log(createBidHistoryInput);
    try {
      const response = await API.graphql(
        graphqlOperation(createBidHistory, {
          input: createBidHistoryInput,
        })
      );
      console.log("postBidHistory", response);
      return response.data.createBidHistory;
    } catch (error) {
      console(error);
    }
  }
);

export const updateBidHistoryDetail = createAsyncThunk(
  "bidHistory/updateBidHistoryDetail",
  async (updateBidHistoryDetailInput) => {
    const response = await API.graphql(
      graphqlOperation(updateBidHistory, {
        input: updateBidHistoryDetailInput,
      })
    );
    return response.data.updateBidHistory;
  }
);

const bidHistorySlice = createSlice({
  name: "bidHistory",
  initialState,
  reducers: {
    insertBidHistory(state, data) {
      bidHistoryAdapter.upsertOne(state, data);
      state.insertBidHistoryStatus = "succeeded";
    },
    removeAllBidHistories(state, data) {
      bidHistoryAdapter.removeAll(state);
      console.log("移除全部bidHistory");
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchBidHistorys (pending, fulfilled, and rejected)
      .addCase(fetchBidHistories.pending, (state, action) => {
        state.fetchBidHistoriesStatus = "loading";
      })
      .addCase(fetchBidHistories.fulfilled, (state, action) => {
        state.fetchBidHistoriesStatus = "succeeded";
        bidHistoryAdapter.removeAll(state);
        bidHistoryAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBidHistories.rejected, (state, action) => {
        state.fetchBidHistoriesStatus = "failed";
        state.fetchBidHistoriesError = action.error.message;
      })
      // Cases for status of selectedBidHistory (pending, fulfilled, and rejected)
      .addCase(selectedBidHistory.pending, (state, action) => {
        state.selectedBidHistoryStatus = "loading";
      })
      .addCase(selectedBidHistory.fulfilled, (state, action) => {
        state.selectedBidHistoryStatus = "succeeded";
        bidHistoryAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedBidHistory.rejected, (state, action) => {
        state.selectedBidHistoryStatus = "failed";
        state.selectedBidHistoryError = action.error.message;
      })
      // Cases for status of postBidHistory (pending, fulfilled, and rejected)
      .addCase(postBidHistory.pending, (state, action) => {
        state.postBidHistoryStatus = "loading";
      })
      .addCase(postBidHistory.fulfilled, (state, action) => {
        state.postBidHistoryStatus = "succeeded";
        // state.bidHistorys.unshift(action.payload.data.createBidHistory);
        bidHistoryAdapter.upsertOne(state, action.payload);
        // state.postBidHistoryStatus = "idle";
      })
      .addCase(postBidHistory.rejected, (state, action) => {
        state.postBidHistoryStatus = "failed";
        state.postBidHistoryError = action.error.message;
      })
      // Cases for status of updateBidHistory (pending, fulfilled, and rejected)
      .addCase(updateBidHistoryDetail.pending, (state, action) => {
        state.updateBidHistoryDetailStatus = "loading";
      })
      .addCase(updateBidHistoryDetail.fulfilled, (state, action) => {
        state.updateBidHistoryDetailStatus = "succeeded";
        // state.bidHistorys.unshift(action.payload.data.createBidHistory);
        bidHistoryAdapter.upsertOne(state, action.payload);
        // state.updateBidHistoryStatus = "idle";
      })
      .addCase(updateBidHistoryDetail.rejected, (state, action) => {
        state.updateBidHistoryDetailStatus = "failed";
        state.updateBidHistoryDetailError = action.error.message;
      });
  },
});

export const { removeAllBidHistories } = bidHistorySlice.actions;
export const { insertBidHistory } = bidHistorySlice.actions;
export const {
  selectAll: selectAllBidHistories,
  selectById: selectBidHistoryById,
  selectIds: selectBidHistoryIds,
} = bidHistoryAdapter.getSelectors((state) => state.bidHistory);

// export const selectMaxBidPriceByCurrentLot = createSelector(
//   selectAllBidHistories,
//   (bidHistory) => {
//     return bidHistory
//       .filter((x) => x.active === true)
//       .sort((a, b) => b.leader - a.leader);
//   }
// );

export const selectMaxBidPriceByCurrentLot = ({ lotBidHistoriesId }) =>
  createSelector(selectAllBidHistories, (bidHistory) => {
    const lotHistories = bidHistory.filter(
      (x) => x.lotBidHistoriesId === lotBidHistoriesId
    );
    const maxBidPrice = lotHistories.sort((a, b) => b.bidPrice - a.bidPrice)[0];

    return maxBidPrice;
  });

export default bidHistorySlice.reducer;
