import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SORTING_VALUES = {
  byPopularity: {
    highToLow: "Start with more popular",
    lowToHigh: "Start with less popular",
  },
};

interface IFilterValuesState {
  releaseYear: number;
  sortingValue: string;
  chosenGenres: number[];
}

const initialState: IFilterValuesState = {
  releaseYear: 2020,
  sortingValue: SORTING_VALUES.byPopularity.highToLow,
  chosenGenres: [],
};

const filterValuesSlice = createSlice({
  name: "filterValues",
  initialState,
  reducers: {
    setReleaseYear(state, action: PayloadAction<number>) {
      state.releaseYear = action.payload;
    },
    setSortingValue(state, action: PayloadAction<string>) {
      state.sortingValue = action.payload;
    },
    addChosenGenre(state, action: PayloadAction<number>) {
      state.chosenGenres.push(action.payload);
    },
    removeChosenGenre(state, action: PayloadAction<number>) {
      state.chosenGenres = state.chosenGenres.filter(
        (genre) => genre !== action.payload
      );
    },
    resetFilterValues(state) {
      state.releaseYear = initialState.releaseYear;
      state.sortingValue = initialState.sortingValue;
      state.chosenGenres = initialState.chosenGenres;
    },
  },
});

export const {
  setReleaseYear,
  setSortingValue,
  addChosenGenre,
  removeChosenGenre,
  resetFilterValues,
} = filterValuesSlice.actions;
export default filterValuesSlice.reducer;
