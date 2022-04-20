import { createSlice } from "@reduxjs/toolkit";

interface Post {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export const slice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    postList(state, { payload }) {
      return { ...state, posts: payload };
    },
  },
});

export const { postList } = slice.actions;

export const selectUser = (state: Post[]) => state;

export default slice.reducer;
