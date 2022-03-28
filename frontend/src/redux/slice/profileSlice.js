import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProfile, updateProfile } from "../../graphql/mutations";

import API from "@aws-amplify/api";
import { getProfile } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";

const initialState = {
  user: {
    id: "",
    name: "",
    companyName: "",
    address: "",
    fax: "",
    idPassport: "",
    title: "",
    phone2: "",
    email: "",
    owner: "",
    createdAt: "",
  },

  //  Status: "idle",
  //  Error: null,
  getUserProfileStatus: "idle",
  getUserProfileError: null,
  createUserProfileStatus: "idle",
  createUserProfileError: null,
  putUserProfileStatus: "idle",
  putUserProfileError: null,
};

export const getUserProfile = createAsyncThunk(
  "profile/getProfile",
  async ({ username }) => {
    const response = await API.graphql({
      query: getProfile,
      variables: { id: username },
    });
    return response.data.getProfile;
  }
);
export const createUserProfile = createAsyncThunk(
  "profile/createUserProfile",
  async ({ createProfileInput }) => {
    console.log(createProfileInput);
    const response = await API.graphql(
      graphqlOperation(createProfile, {
        input: createProfileInput,
      })
    );
    console.log("response", response);
    return response.data.createProfile;
  }
);
export const putUserProfile = createAsyncThunk(
  "profile/putUserProfile",
  async ({ updateUserInput }) => {
    console.log(updateUserInput);
    try {
      const response = await API.graphql(
        graphqlOperation(updateProfile, {
          input: updateUserInput,
        })
      );
      console.log("response", response);
      return response.data.updateProfile;
    } catch (error) {
      console.log(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    //有API call 的不能放这里
    removeSelectedProfile(state, action) {
      state.user = {
        id: "",
        name: "",
        companyName: "",
        address: "",
        fax: "",
        idPassport: "",
        title: "",
        phone2: "",
        email: "",
        owner: "",
        createdAt: "",
      };
    },
  },
  extraReducers(builder) {
    builder
      // Cases for status of getProfile (pending, fulfilled, and rejected)
      .addCase(getUserProfile.pending, (state, action) => {
        state.getProfileStatus = "loading";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.getProfileStatus = "succeeded";
        //console.log(action);
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.getProfileStatus = "failed";
        state.getProfileError = action.error.message;
      })
      // Cases for status of create (pending, fulfilled, and rejected)
      .addCase(createUserProfile.pending, (state, action) => {
        state.createUserProfileStatus = "loading";
      })
      .addCase(createUserProfile.fulfilled, (state, action) => {
        state.createUserProfileStatus = "succeeded";
        state.user = action.payload;
      })
      .addCase(createUserProfile.rejected, (state, action) => {
        state.createUserProfileStatus = "failed";
        state.createUserProfileError = action.error.message;
      })
      // Cases for status of putUserProfile (pending, fulfilled, and rejected)
      .addCase(putUserProfile.pending, (state, action) => {
        state.putUserProfileStatus = "loading";
      })
      .addCase(putUserProfile.fulfilled, (state, action) => {
        state.putUserProfileStatus = "succeeded";
        state.user.id = action.payload.id;
        state.user.name = action.payload.name;
        state.user.companyName = action.payload.companyName;
        state.user.address = action.payload.address;
        state.user.fax = action.payload.fax;
        state.user.idPassport = action.payload.idPassport;
        state.user.title = action.payload.title;
        state.user.phone = action.payload.phone;
        state.user.phone2 = action.payload.phone2;
        state.user.email = action.payload.email;
        state.user.createdAt = action.payload.createdAt;
      })
      .addCase(putUserProfile.rejected, (state, action) => {
        state.putUserProfileStatus = "failed";
        state.putUserProfileError = action.error.message;
      });
  },
});
export const { removeSelectedProfile } = profileSlice.actions;

export default profileSlice.reducer;
