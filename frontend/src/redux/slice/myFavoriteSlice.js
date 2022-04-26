import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createMyFavorite, deleteMyFavorite } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listMyFavorites } from "../../graphql_custom/_queries";

const myFavoriteAdapter = createEntityAdapter({});

const initialState = myFavoriteAdapter.getInitialState({
  //  Status: "idle",
  //  Error: null,
  fetchMyFavoriteStatus: "idle",
  fetchMyFavoriteError: null,
  postMyFavoriteStatus: "idle",
  postMyFavoriteError: null,
  //updateMyFavoriteStatus: "idle",
  // updateMyFavoriteError: null,
  removeMyFavoriteStatus: "idle",
  removeMyFavoriteError: null,
});

export const fetchMyFavorite = createAsyncThunk(
  "myFavorite/fetchMyFavorite",
  async () => {
    try {
      const response = await API.graphql({
        query: listMyFavorites,
        variables: { limit: 1000 },
      });
      return response.data.listMyFavorites.items;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postMyFavorite = createAsyncThunk(
  "myFavorite/postMyFavorite",
  async ({ createMyFavoriteInput }) => {
    console.log(createMyFavoriteInput);
    try {
      const response = await API.graphql(
        graphqlOperation(createMyFavorite, {
          input: createMyFavoriteInput,
        })
      );
      console.log("response", response);
      return response.data.createMyFavorite;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeMyFavorite = createAsyncThunk(
  "myFavorite/removeMyFavorite",
  async ({ id }) => {
    console.log(id);
    try {
      const response = await API.graphql(
        graphqlOperation(deleteMyFavorite, {
          input: { id: id },
        })
      );
      console.log("response", response);
      return response.data.deleteMyFavorite;
    } catch (error) {
      console.log(error);
    }
  }
);
const myFavoriteSlice = createSlice({
  name: "myFavorite",
  initialState,
  reducers: {
    //有API call 的不能放这里
    updateLotsDetailBySub(state, data) {
      myFavoriteAdapter.upsertOne(state, data);
      //state.insertBidItemHistoryStatus = "succeeded";
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchMyFavorite (pending, fulfilled, and rejected)
      .addCase(fetchMyFavorite.pending, (state, action) => {
        state.fetchMyFavoriteStatus = "loading";
      })
      .addCase(fetchMyFavorite.fulfilled, (state, action) => {
        state.fetchMyFavoriteStatus = "succeeded";
        //console.log(action);
        myFavoriteAdapter.removeAll(state);
        myFavoriteAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchMyFavorite.rejected, (state, action) => {
        state.fetchMyFavoriteStatus = "failed";
        state.fetchMyFavoriteError = action.error.message;
      })
      // Cases for status of postMyFavorite (pending, fulfilled, and rejected)
      .addCase(postMyFavorite.pending, (state, action) => {
        state.postMyFavoriteStatus = "loading";
      })
      .addCase(postMyFavorite.fulfilled, (state, action) => {
        state.postMyFavoriteStatus = "succeeded";
        myFavoriteAdapter.addOne(state, action.payload);
      })
      .addCase(postMyFavorite.rejected, (state, action) => {
        state.postMyFavoriteStatus = "failed";
        state.postMyFavoriteError = action.error.message;
      })
      // Cases for status of removeMyFavorite (pending, fulfilled, and rejected)
      .addCase(removeMyFavorite.pending, (state, action) => {
        state.removeMyFavoriteStatus = "loading";
      })
      .addCase(removeMyFavorite.fulfilled, (state, action) => {
        state.removeMyFavoriteStatus = "succeeded";
        //myFavoriteAdapter.removeOne(state, action.payload.id);
      })
      .addCase(removeMyFavorite.rejected, (state, action) => {
        state.removeMyFavoriteStatus = "failed";
        state.removeMyFavoriteError = action.error.message;
      });
  },
});

export const { selectAll: selectAllMyFavorite } =
  myFavoriteAdapter.getSelectors((state) => state.myFavorite);

export default myFavoriteSlice.reducer;
