/*

use this as category

replace Category to Database table name example: Category => Todo

replace Category to Database table name Lower fist one example: category => todo

--and  replace the under two to store.js

import categoryReducer from "./slice/categorySlice";

category: categoryReducer,

*/

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { createCategory, updateCategory } from "../../graphql/mutations";
import { getCategory, listCategories } from "../../graphql/queries";

import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const categoryAdapter = createEntityAdapter({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = categoryAdapter.getInitialState({
  fetchCategoriesStatus: "idle",
  fetchCategoriesError: null,
  selectedCategoryStatus: "idle",
  selectedCategoryError: null,
  postCategoryStatus: "idle",
  postCategoryError: null,
  postCategoryImgStatus: "idle",
  postCategoryImgError: null,
  updateCategoryDetailStatus: "idle",
  updateCategoryDetailError: null,
});

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    try {
      const response = await API.graphql({
        query: listCategories,
        variables: {
          sortKey: "SortKey",
          sortDirection: "DESC",
        },
        authMode: "AWS_IAM",
      });
      return response.data.listCategories.items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedCategory = createAsyncThunk(
  "category/selectedCategory",
  async (id) => {
    const response = await API.graphql({
      query: getCategory,
      variables: { id: id },
      authMode: "AWS_IAM",
    });
    // console.log("what?", response);
    if (response.data.getCategory === null) {
      return { id: id, description: "not-found" };
    }
    return response.data.getCategory;
  }
);

export const postCategory = createAsyncThunk(
  "category/postCategory",
  async ({ createCategoryInput }) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createCategory, { input: createCategoryInput })
      );
      return response.data.createCategory;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCategoryDetail = createAsyncThunk(
  "category/updateCategoryDetail",
  async (updateCategoryDetail) => {
    const response = await API.graphql(
      graphqlOperation(updateCategory, { input: updateCategoryDetail })
    );
    return response.data.updateCategory;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchCategories (pending, fulfilled, and rejected)
      .addCase(fetchCategories.pending, (state, action) => {
        state.fetchCategoriesStatus = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.fetchCategoriesStatus = "succeeded";
        categoryAdapter.removeAll(state);
        categoryAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.fetchCategoriesStatus = "failed";
        state.fetchCategoriesError = action.error.message;
      })
      // Cases for status of selectedCategory (pending, fulfilled, and rejected)
      .addCase(selectedCategory.pending, (state, action) => {
        state.selectedCategoryStatus = "loading";
      })
      .addCase(selectedCategory.fulfilled, (state, action) => {
        state.selectedCategoryStatus = "succeeded";
        categoryAdapter.upsertOne(state, action.payload);
      })
      .addCase(selectedCategory.rejected, (state, action) => {
        state.selectedCategoryStatus = "failed";
        state.selectedCategoryError = action.error.message;
      })
      // Cases for status of postCategory (pending, fulfilled, and rejected)
      .addCase(postCategory.pending, (state, action) => {
        state.postCategoryStatus = "loading";
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.postCategoryStatus = "succeeded";
        // state.categorys.unshift(action.payload.data.createCategory);
        categoryAdapter.addOne(state, action.payload);
        // state.postCategoryStatus = "idle";
      })
      .addCase(postCategory.rejected, (state, action) => {
        state.postCategoryStatus = "failed";
        state.postCategoryError = action.error.message;
      })
      // Cases for status of updateCategory (pending, fulfilled, and rejected)
      .addCase(updateCategoryDetail.pending, (state, action) => {
        state.updateCategoryDetailStatus = "loading";
      })
      .addCase(updateCategoryDetail.fulfilled, (state, action) => {
        state.updateCategoryDetailStatus = "succeeded";
        // state.categorys.unshift(action.payload.data.createCategory);
        categoryAdapter.upsertOne(state, action.payload);
        // state.updateCategoryStatus = "idle";
      })
      .addCase(updateCategoryDetail.rejected, (state, action) => {
        state.updateCategoryDetailStatus = "failed";
        state.updateCategoryDetailError = action.error.message;
      });
  },
});

export const { removeSelectedCategory } = categorySlice.actions;

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = categoryAdapter.getSelectors((state) => state.category);

export default categorySlice.reducer;
