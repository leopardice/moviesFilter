import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currentPageState {
  value: number;
}

const initialState: currentPageState = { value: 1 };

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    nextPage(state) {
      state.value++;
    },
    previousPage(state) {
      state.value--;
    },
    resetPage(state) {
      state.value = 1;
    },
  },
});

export const { nextPage, previousPage, resetPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
