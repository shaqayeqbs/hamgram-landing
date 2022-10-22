import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accountList } from "./UserService";
import { DeleteCompetitor, lastPostCompetitor } from "./CompetitorService";

export const userData = createAsyncThunk(
  "user/data",
  async ({ userAccess }, thunkAPI) => {
    try {
      const response = await accountList({ userAccess });

      if (response) {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  }
);
export const compDelete = createAsyncThunk(
  "comp/delete",
  async (
    { userAccess, username, competitor_username, competitorId },
    thunkAPI
  ) => {
    try {
      const response = await DeleteCompetitor({
        userAccess,
        username,
        competitor_username,
      });

      if (response) {
        return competitorId;
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }
);
export const ComplastPost = createAsyncThunk(
  "comp/lastpost",
  async ({ competitorUsername, userAccess, response }, thunkAPI) => {
    try {
      const images = await lastPostCompetitor({
        competitorUsername,
        userAccess,
      });

      if (images) {
        return { response, images };
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const initialState = {
  id: "",
  username: "",
  name: "",
  bio: "",
  following: "",
  followers: "",
  posts: "",
  image: "",
  images: [],
  initialRender: true,
  competitors: [],
  user: null,
  something: ["chera"],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateCompetitors(state, action) {
      const id = action.payload.id;
      const updatedCompetitor = action.payload.images;
      let existingItem = state.competitors.find((item) => item.id === id);

      if (existingItem) {
        existingItem.images = updatedCompetitor;
      }
    },
    logout(state) {
      state.id = "";
      state.username = "";
      state.name = "";
      state.bio = "";
      state.following = "";
      state.followers = "";
      state.posts = "";
      state.initialRender = true;
      state.status = "";
      state.competitors = [];
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userData.fulfilled, (state, action) => {
      state.status = "USER_DATA_FULFILLED";
      if (action.payload) {
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.image = action.payload.image;
        state.name = action.payload.name;
        state.following = action.payload.following;
        state.followers = action.payload.followers;
        state.posts = action.payload.posts;
        state.bio = action.payload.bio;
        state.user = action.payload.user;
        // state.competitors = action.payload.competitors;
        state.initialRender = false;
      }
    });

    builder.addCase(compDelete.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        const id = action.payload;
        state.competitors = state.competitors.filter((item) => item.id !== id);
      }
    });
    builder.addCase(ComplastPost.fulfilled, (state, action) => {
      if (action.payload.response) {
        const images = action.payload.images;
        const merged = { ...action.payload.response, images };
        const id = action.payload.response.id;
        const existingItem = state.competitors.find((item) => item.id === id);
        if (!existingItem) {
          state.competitors.push(merged);
        }
      }
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
