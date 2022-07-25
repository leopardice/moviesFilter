import { createSlice } from "@reduxjs/toolkit";

interface ILoginModalState {
  open: boolean;
}

const initialState: ILoginModalState = { open: false };

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
