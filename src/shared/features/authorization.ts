import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  loggedIn: boolean;
}

const initialState: IAuthState = { loggedIn: true };

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
