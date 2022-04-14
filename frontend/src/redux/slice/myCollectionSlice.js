import { 
    createAsyncThunk, 
    createSlice,
    createEntityAdapter
} from "@reduxjs/toolkit";
import {
  createMyCollection,
} from "../../graphql/mutations";

import API from "@aws-amplify/api";
import {  listMyCollections } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const myCollectionAdapter = createEntityAdapter({
    // selectId: (item) => item.id,
    //sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
  });

const initialState = myCollectionAdapter.getInitialState({
  //  Status: "idle",
  //  Error: null,
  fetchMyCollectionStatus: "idle",
  fetchMyCollectionError: null,
  postMyCollectionStatus: "idle",
  postMyCollectionError: null,
  //updateMyCollectionStatus: "idle",
 // updateMyCollectionError: null,
});

export const fetchMyCollection = createAsyncThunk(
  "myCollection/fetchMyCollection",
  async ({ isAuthenticated }) => {
      try{
    const response = await API.graphql({
      query: listMyCollections,
      variables: { limit:1000, },
      authMode: isAuthenticated ? undefined : "AWS_IAM",
    });
    return response.data.listMyCollections.items;
} catch(error){
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
        myCollectionAdapter.upsertMany(state,action.payload);
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
        myCollectionAdapter.addOne(state,action.payload);
      })
      .addCase(postMyCollection.rejected, (state, action) => {
        state.postMyCollectionStatus = "failed";
        state.postMyCollectionError = action.error.message;
      })
    
  },
});

export const {
    selectAll: selectAllMyCollection,
} = myCollectionAdapter.getSelectors((state) => state.myCollection);

export default myCollectionSlice.reducer;
