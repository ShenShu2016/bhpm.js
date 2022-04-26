/*

use this as lots

replace Lots to Database table name example: Lots => Todo

replace Lots to Database table name Lower fist one example: lots => todo

--and  replace the under two to store.js

import lotsReducer from "./slice/lotsSlice";

lots: lotsReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { createLots, updateLots } from "../../graphql/mutations";
import {
  lotsSortByLot_isAuth,
  lotsSortByLot_noAuth,
} from "../../graphql_custom/_queries";

import API from "@aws-amplify/api";
import { getLots } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const lotsAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  // sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = lotsAdapter.getInitialState({
  fetchLotssStatus: "idle",
  fetchLotssError: null,
  selectedLotsStatus: "idle",
  selectedLotsError: null,
  postLotsStatus: "idle",
  postLotsError: null,
  postLotsImgStatus: "idle",
  postLotsImgError: null,
  updateLotsDetailStatus: "idle",
  updateLotsDetailError: null,
});

export const fetchLotss = createAsyncThunk(
  "lots/fetchLotss",
  async ({ isAuthenticated, auctionsID, username }) => {
    //console.log("isAuthenticated, auctionsID", isAuthenticated, auctionsID);
    try {
      const LotssData = await API.graphql({
        query: username ? lotsSortByLot_isAuth : lotsSortByLot_noAuth,
        variables: {
          auctionsID: auctionsID,
          sortDirection: "ASC",
          limit: 1000,
          username: username,
        },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return LotssData.data.lotsSortByLot.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedLots = createAsyncThunk(
  "lots/selectedLots",
  async ({ isAuthenticated, lotsID }) => {
    try {
      const response = await API.graphql({
        query: getLots,
        variables: { id: lotsID },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      // console.log("what?", response);
      return response.data.getLots;
    } catch (error) {
      console.log(error);
      return error.data.getLots;
    }
  }
);

export const postLots = createAsyncThunk(
  "lots/postLots",
  async ({ createLotsInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createLots, { input: createLotsInput })
      );
      return response.data.createLots;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateLotsDetail = createAsyncThunk(
  "lots/updateLotsDetail",
  async (updateLotsDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateLots, { input: updateLotsDetail })
    );
    return response.data.updateLots;
  }
);

const lotsSlice = createSlice({
  name: "lots",
  initialState,
  reducers: {
    updateLotsDetailBySub(state, data) {
      lotsAdapter.upsertOne(state, data);
      state.insertBidItemHistoryStatus = "succeeded";
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchLotss (pending, fulfilled, and rejected)
      .addCase(fetchLotss.pending, (state, action) => {
        state.fetchLotssStatus = "loading";
      })
      .addCase(fetchLotss.fulfilled, (state, action) => {
        state.fetchLotssStatus = "succeeded";
        lotsAdapter.removeAll(state);
        lotsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchLotss.rejected, (state, action) => {
        state.fetchLotssStatus = "failed";
        state.fetchLotssError = action.error.message;
      })
      // Cases for status of selectedLots (pending, fulfilled, and rejected)
      .addCase(selectedLots.pending, (state, action) => {
        state.selectedLotsStatus = "loading";
      })
      .addCase(selectedLots.fulfilled, (state, action) => {
        state.selectedLotsStatus = "succeeded";
        lotsAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedLots.rejected, (state, action) => {
        state.selectedLotsStatus = "failed";
        state.selectedLotsError = action.error.message;
      })
      // Cases for status of postLots (pending, fulfilled, and rejected)
      .addCase(postLots.pending, (state, action) => {
        state.postLotsStatus = "loading";
      })
      .addCase(postLots.fulfilled, (state, action) => {
        state.postLotsStatus = "succeeded";
        // state.lotss.unshift(action.payload.data.createLots);
        lotsAdapter.addOne(state, action.payload);
        // state.postLotsStatus = "idle";
      })
      .addCase(postLots.rejected, (state, action) => {
        state.postLotsStatus = "failed";
        state.postLotsError = action.error.message;
      })
      // Cases for status of updateLots (pending, fulfilled, and rejected)
      .addCase(updateLotsDetail.pending, (state, action) => {
        state.updateLotsDetailStatus = "loading";
      })
      .addCase(updateLotsDetail.fulfilled, (state, action) => {
        state.updateLotsDetailStatus = "succeeded";
        // state.lotss.unshift(action.payload.data.createLots);
        lotsAdapter.upsertOne(state, action.payload);
        // state.updateLotsStatus = "idle";
      })
      .addCase(updateLotsDetail.rejected, (state, action) => {
        state.updateLotsDetailStatus = "failed";
        state.updateLotsDetailError = action.error.message;
      });
  },
});

export const { removeSelectedLots } = lotsSlice.actions;
export const { updateLotsDetailBySub } = lotsSlice.actions;
export const {
  selectAll: selectAllLotss,
  selectById: selectLotsById,
  selectIds: selectLotsIds,
} = lotsAdapter.getSelectors((state) => state.lots);

export const selectLotByInProgress = () =>
  createSelector(selectAllLotss, (lots) => {
    console.log();
    return lots.filter((x) => x.lotsStatus === "InProgress");
  });

export const selectLotByNextLotNumber = (lot) =>
  createSelector(selectAllLotss, (lots) => {
    return lots.filter((x) => x.lot === lot);
  });
export default lotsSlice.reducer;
