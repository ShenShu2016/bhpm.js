import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createMyCollection,
  deleteMyCollection,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listMyCollections } from "../../graphql_custom/_queries";

const myCollectionAdapter = createEntityAdapter({});

const initialState = myCollectionAdapter.getInitialState({
  //  Status: "idle",
  //  Error: null,
  fetchMyCollectionStatus: "idle",
  fetchMyCollectionError: null,
  postMyCollectionStatus: "idle",
  postMyCollectionError: null,
  //updateMyCollectionStatus: "idle",
  // updateMyCollectionError: null,
  removeMyCollectionStatus: "idle",
  removeMyCollectionError: null,
});

export const fetchMyCollection = createAsyncThunk(
  "myCollection/fetchMyCollection",
  async () => {
    try {
      const response = await API.graphql({
        query: listMyCollections,
        variables: { limit: 1000 },
      });
      return response.data.listMyCollections.items;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postMyCollection = createAsyncThunk(
  "myCollection/postMyCollection",
  async ({ createMyCollectionInput }) => {
    console.log(createMyCollectionInput);
    try {
      const response = await API.graphql(
        graphqlOperation(createMyCollection, {
          input: createMyCollectionInput,
        })
      );
      console.log("response", response);
      return response.data.createMyCollection;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeMyCollection = createAsyncThunk(
  "myCollection/removeMyCollection",
  async ({ id }) => {
    console.log(id);
    try {
      const response = await API.graphql(
        graphqlOperation(deleteMyCollection, {
          input: { id: id },
        })
      );
      console.log("response", response);
      return response.data.deleteMyCollection;
    } catch (error) {
      console.log(error);
    }
  }
);
const myCollectionSlice = createSlice({
  name: "myCollection",
  initialState,
  reducers: {
    //有API call 的不能放这里
    updateLotsDetailBySub(state, data) {
      myCollectionAdapter.upsertOne(state, data);
      //state.insertBidItemHistoryStatus = "succeeded";
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of fetchMyCollection (pending, fulfilled, and rejected)
      .addCase(fetchMyCollection.pending, (state, action) => {
        state.fetchMyCollectionStatus = "loading";
      })
      .addCase(fetchMyCollection.fulfilled, (state, action) => {
        state.fetchMyCollectionStatus = "succeeded";
        //console.log(action);
        myCollectionAdapter.removeAll(state);
        myCollectionAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchMyCollection.rejected, (state, action) => {
        state.fetchMyCollectionStatus = "failed";
        state.fetchMyCollectionError = action.error.message;
      })
      // Cases for status of postMyCollection (pending, fulfilled, and rejected)
      .addCase(postMyCollection.pending, (state, action) => {
        state.postMyCollectionStatus = "loading";
      })
      .addCase(postMyCollection.fulfilled, (state, action) => {
        state.postMyCollectionStatus = "succeeded";
        myCollectionAdapter.addOne(state, action.payload);
      })
      .addCase(postMyCollection.rejected, (state, action) => {
        state.postMyCollectionStatus = "failed";
        state.postMyCollectionError = action.error.message;
      })
      // Cases for status of removeMyCollection (pending, fulfilled, and rejected)
      .addCase(removeMyCollection.pending, (state, action) => {
        state.removeMyCollectionStatus = "loading";
      })
      .addCase(removeMyCollection.fulfilled, (state, action) => {
        state.removeMyCollectionStatus = "succeeded";
        myCollectionAdapter.removeOne(state, action.payload.id);
      })
      .addCase(removeMyCollection.rejected, (state, action) => {
        state.removeMyCollectionStatus = "failed";
        state.removeMyCollectionError = action.error.message;
      });
  },
});

export const { selectAll: selectAllMyCollection } =
  myCollectionAdapter.getSelectors((state) => state.myCollection);

export default myCollectionSlice.reducer;
