import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginModalState {
  open: boolean;
}

const initialState: loginModalState = { open: false };

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openLogin(state) {
      state.open = true;
    },
    closeLogin(state) {
      state.open = false;
    },
  },
});

export const { openLogin, closeLogin } = loginModalSlice.actions;
export default loginModalSlice.reducer;
