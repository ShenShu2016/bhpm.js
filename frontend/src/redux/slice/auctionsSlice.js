import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { createAuctions, updateAuctions } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getAuctions } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listAuctions } from "../../graphql_custom/_queries";

const auctionsAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = auctionsAdapter.getInitialState({
  fetchAuctionssStatus: "idle",
  fetchAuctionssError: null,
  selectedAuctionsStatus: "idle",
  selectedAuctionsError: null,
  postAuctionsStatus: "idle",
  postAuctionsError: null,
  postAuctionsImgStatus: "idle",
  postAuctionsImgError: null,
  updateAuctionsDetailStatus: "idle",
  updateAuctionsDetailError: null,
});

export const fetchAuctionss = createAsyncThunk(
  "auctions/fetchAuctionss",
  async ({ isAuthenticated }) => {
    try {
      const AuctionssData = await API.graphql({
        query: listAuctions,
        variables: { active: true, limit: 1 },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      return AuctionssData.data.listAuctions.items;
    } catch (error) {
      return error.data.listAuctions.items;
    }
  }
);

export const selectedAuctions = createAsyncThunk(
  "auctions/selectedAuctions",

  async ({ isAuthenticated, auctionsID }) => {
    try {
      //console.log("isAuthenticated", isAuthenticated);
      const response = await API.graphql({
        query: getAuctions,
        variables: { id: auctionsID },
        authMode: isAuthenticated ? undefined : "AWS_IAM",
      });
      // console.log("what?", response);
      return response.data.getAuctions;
    } catch (error) {
      //console.log("出错啦", error);
      return error.data.getAuctions;
    }
  }
);

export const postAuctions = createAsyncThunk(
  "auctions/postAuctions",
  async ({ createAuctionsInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createAuctions, { input: createAuctionsInput })
      );
      return response.data.createAuctions;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateAuctionsDetail = createAsyncThunk(
  "auctions/updateAuctionsDetail",
  async (updateAuctionsDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateAuctions, { input: updateAuctionsDetail })
    );
    return response.data.updateAuctions;
  }
);

const auctionsSlice = createSlice({
  name: "auctions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchAuctionss (pending, fulfilled, and rejected)
      .addCase(fetchAuctionss.pending, (state, action) => {
        state.fetchAuctionssStatus = "loading";
      })
      .addCase(fetchAuctionss.fulfilled, (state, action) => {
        state.fetchAuctionssStatus = "succeeded";
        auctionsAdapter.removeAll(state);
        auctionsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAuctionss.rejected, (state, action) => {
        state.fetchAuctionssStatus = "failed";
        state.fetchAuctionssError = action.error.message;
      })
      // Cases for status of selectedAuctions (pending, fulfilled, and rejected)
      .addCase(selectedAuctions.pending, (state, action) => {
        state.selectedAuctionsStatus = "loading";
      })
      .addCase(selectedAuctions.fulfilled, (state, action) => {
        state.selectedAuctionsStatus = "succeeded";
        auctionsAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedAuctions.rejected, (state, action) => {
        state.selectedAuctionsStatus = "failed";
        state.selectedAuctionsError = action.error.message;
      })
      // Cases for status of postAuctions (pending, fulfilled, and rejected)
      .addCase(postAuctions.pending, (state, action) => {
        state.postAuctionsStatus = "loading";
      })
      .addCase(postAuctions.fulfilled, (state, action) => {
        state.postAuctionsStatus = "succeeded";
        // state.auctionss.unshift(action.payload.data.createAuctions);
        auctionsAdapter.addOne(state, action.payload);
        // state.postAuctionsStatus = "idle";
      })
      .addCase(postAuctions.rejected, (state, action) => {
        state.postAuctionsStatus = "failed";
        state.postAuctionsError = action.error.message;
      })
      // Cases for status of updateAuctions (pending, fulfilled, and rejected)
      .addCase(updateAuctionsDetail.pending, (state, action) => {
        state.updateAuctionsDetailStatus = "loading";
      })
      .addCase(updateAuctionsDetail.fulfilled, (state, action) => {
        state.updateAuctionsDetailStatus = "succeeded";
        // state.auctionss.unshift(action.payload.data.createAuctions);
        auctionsAdapter.upsertOne(state, action.payload);
        // state.updateAuctionsStatus = "idle";
      })
      .addCase(updateAuctionsDetail.rejected, (state, action) => {
        state.updateAuctionsDetailStatus = "failed";
        state.updateAuctionsDetailError = action.error.message;
      });
  },
});

export const { removeSelectedAuctions } = auctionsSlice.actions;

export const {
  selectAll: selectAllAuctionss,
  selectById: selectAuctionsById,
  selectIds: selectAuctionsIds,
} = auctionsAdapter.getSelectors((state) => state.auctions);

export const selectMyAuctionLimitation = ({ auctionsID }) =>
  createSelector(selectAllAuctionss, (auctions) => {
    const auction = auctions.filter((x) => x.id === auctionsID)[0];
    console.log(auction);

    return auction;
  });

export default auctionsSlice.reducer;
