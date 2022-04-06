import { createSlice } from "@reduxjs/toolkit";

interface User {
  userName: string;
}

export const slice = createSlice({
  name: "user",
  initialState: {
    userName: "",
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, userName: payload };
    },
  },
});

export const { changeUser } = slice.actions;

export const selectUser = (state: User) => state.userName;

export default slice.reducer;
