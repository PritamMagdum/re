import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, createUser, signOut } from "./authAPI";
// import { updateUser } from "../user/userAPI";

const initialState = {
  loggedInUserToken: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (loginInfo, { rejectWithValue }) => {
    console.log("loginInfo -->", loginInfo);
    try {
      const response = await loginUser(loginInfo);
      console.log("response data is -->", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (loginInfo) => {
    const response = await signOut(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const updateUserAsync = createAsyncThunk(
//   "user/updateUser",
//   async (update) => {
//     const response = await updateUser(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      // .addCase(updateUserAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(updateUserAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.loggedInUserToken = action.payload;
      // })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = null;
      });
  },
});

export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
