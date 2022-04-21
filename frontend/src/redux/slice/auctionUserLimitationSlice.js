/*

use this as auctionUserLimitation

replace AuctionUserLimitation to Database table name example: AuctionUserLimitation => Todo

replace AuctionUserLimitation to Database table name Lower fist one example: auctionUserLimitation => todo

--and  replace the under two to store.js

import auctionUserLimitationReducer from "./slice/auctionUserLimitationSlice";

auctionUserLimitation: auctionUserLimitationReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createAuctionUserLimitation,
  updateAuctionUserLimitation,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getAuctionUserLimitation } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listAuctionUserLimitations } from "../../graphql/queries";

const auctionUserLimitationAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = auctionUserLimitationAdapter.getInitialState({
  fetchAuctionUserLimitationsStatus: "idle",
  fetchAuctionUserLimitationsError: null,
  selectedAuctionUserLimitationStatus: "idle",
  selectedAuctionUserLimitationError: null,
  postAuctionUserLimitationStatus: "idle",
  postAuctionUserLimitationError: null,
  postAuctionUserLimitationImgStatus: "idle",
  postAuctionUserLimitationImgError: null,
  updateAuctionUserLimitationDetailStatus: "idle",
  updateAuctionUserLimitationDetailError: null,
});

export const fetchAuctionUserLimitations = createAsyncThunk(
  "auctionUserLimitation/fetchAuctionUserLimitations",
  async () => {
    try {
      const AuctionUserLimitationsData = await API.graphql({
        query: listAuctionUserLimitations,
      });
      return AuctionUserLimitationsData.data.listAuctionUserLimitations.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedAuctionUserLimitation = createAsyncThunk(
  "auctionUserLimitation/selectedAuctionUserLimitation",
  async (id) => {
    const response = await API.graphql({
      query: getAuctionUserLimitation,
    });
    // console.log("what?", response);
    if (response.data.getAuctionUserLimitation === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getAuctionUserLimitation;
  }
);

export const postAuctionUserLimitation = createAsyncThunk(
  "auctionUserLimitation/postAuctionUserLimitation",
  async ({ createAuctionUserLimitationInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createAuctionUserLimitation, {
          input: createAuctionUserLimitationInput,
        })
      );
      return response.data.createAuctionUserLimitation;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateAuctionUserLimitationDetail = createAsyncThunk(
  "auctionUserLimitation/updateAuctionUserLimitationDetail",
  async (updateAuctionUserLimitationDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateAuctionUserLimitation, {
        input: updateAuctionUserLimitationDetail,
      })
    );
    return response.data.updateAuctionUserLimitation;
  }
);

const auctionUserLimitationSlice = createSlice({
  name: "auctionUserLimitation",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchAuctionUserLimitations (pending, fulfilled, and rejected)
      .addCase(fetchAuctionUserLimitations.pending, (state, action) => {
        state.fetchAuctionUserLimitationsStatus = "loading";
      })
      .addCase(fetchAuctionUserLimitations.fulfilled, (state, action) => {
        state.fetchAuctionUserLimitationsStatus = "succeeded";
        auctionUserLimitationAdapter.removeAll(state);
        auctionUserLimitationAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAuctionUserLimitations.rejected, (state, action) => {
        state.fetchAuctionUserLimitationsStatus = "failed";
        state.fetchAuctionUserLimitationsError = action.error.message;
      })
      // Cases for status of selectedAuctionUserLimitation (pending, fulfilled, and rejected)
      .addCase(selectedAuctionUserLimitation.pending, (state, action) => {
        state.selectedAuctionUserLimitationStatus = "loading";
      })
      .addCase(selectedAuctionUserLimitation.fulfilled, (state, action) => {
        state.selectedAuctionUserLimitationStatus = "succeeded";
        auctionUserLimitationAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedAuctionUserLimitation.rejected, (state, action) => {
        state.selectedAuctionUserLimitationStatus = "failed";
        state.selectedAuctionUserLimitationError = action.error.message;
      })
      // Cases for status of postAuctionUserLimitation (pending, fulfilled, and rejected)
      .addCase(postAuctionUserLimitation.pending, (state, action) => {
        state.postAuctionUserLimitationStatus = "loading";
      })
      .addCase(postAuctionUserLimitation.fulfilled, (state, action) => {
        state.postAuctionUserLimitationStatus = "succeeded";
        // state.auctionUserLimitations.unshift(action.payload.data.createAuctionUserLimitation);
        auctionUserLimitationAdapter.addOne(state, action.payload);
        // state.postAuctionUserLimitationStatus = "idle";
      })
      .addCase(postAuctionUserLimitation.rejected, (state, action) => {
        state.postAuctionUserLimitationStatus = "failed";
        state.postAuctionUserLimitationError = action.error.message;
      })
      // Cases for status of updateAuctionUserLimitation (pending, fulfilled, and rejected)
      .addCase(updateAuctionUserLimitationDetail.pending, (state, action) => {
        state.updateAuctionUserLimitationDetailStatus = "loading";
      })
      .addCase(updateAuctionUserLimitationDetail.fulfilled, (state, action) => {
        state.updateAuctionUserLimitationDetailStatus = "succeeded";
        // state.auctionUserLimitations.unshift(action.payload.data.createAuctionUserLimitation);
        auctionUserLimitationAdapter.upsertOne(state, action.payload);
        // state.updateAuctionUserLimitationStatus = "idle";
      })
      .addCase(updateAuctionUserLimitationDetail.rejected, (state, action) => {
        state.updateAuctionUserLimitationDetailStatus = "failed";
        state.updateAuctionUserLimitationDetailError = action.error.message;
      });
  },
});

export const { removeSelectedAuctionUserLimitation } =
  auctionUserLimitationSlice.actions;

export const {
  selectAll: selectAllAuctionUserLimitations,
  selectById: selectAuctionUserLimitationById,
  selectIds: selectAuctionUserLimitationIds,
} = auctionUserLimitationAdapter.getSelectors(
  (state) => state.auctionUserLimitation
);

export default auctionUserLimitationSlice.reducer;
