import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
  loggedIn: boolean;
}

const initialState: authState = { loggedIn: true };

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = authorizationSlice.actions;
export default authorizationSlice.reducer;
