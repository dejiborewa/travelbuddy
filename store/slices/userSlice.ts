/* eslint-disable no-param-reassign */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IUser from "../../types/user.type";

const initialState: { user: IUser | null } = {
  user: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeToken(state, action: PayloadAction<IUser>) {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout(state) {
      localStorage.removeItem("user");
      state.user = null;
    }
  }
});

export const { storeToken, logout } = userSlice.actions;
export default userSlice.reducer;
