import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: number } = { value: 1 };

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    nextPage(state) {
      state.value++;
    },
    previousPage(state) {
      state.value--;
    },
  },
});

export const { nextPage, previousPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
