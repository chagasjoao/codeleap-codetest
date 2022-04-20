import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/interfaces";

export const slice = createSlice({
  name: "post",
  initialState: {
    posts: [] as IPost[],
  },
  reducers: {
    postList(state, { payload }) {
      return { ...state, posts: payload };
    },
  },
});

export const { postList } = slice.actions;

export const selectPost = (state: IPost[]) => state;

export default slice.reducer;
