import { createSlice } from "@reduxjs/toolkit";

interface ICurrentPageState {
  value: number;
}

const initialState: ICurrentPageState = { value: 1 };

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    nextPage(state) {
      state.value += 1;
    },
    previousPage(state) {
      state.value -= 1;
    },
    resetPage(state) {
      state.value = 1;
    },
  },
});

export const { nextPage, previousPage, resetPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
