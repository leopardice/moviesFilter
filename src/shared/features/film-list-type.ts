import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const FILM_LIST_TYPES = {
  all_films: "All",
  favorite_films: "Favorite",
  watch_later_films: "Watch Later",
};

interface listTypeState {
  type: string;
  favorite_films_ids: number[];
  watch_later_films_ids: number[];
}

const initialState: listTypeState = {
  type: FILM_LIST_TYPES.all_films,
  favorite_films_ids: [],
  watch_later_films_ids: [],
};

const listTypeSlice = createSlice({
  name: "listType",
  initialState,
  reducers: {
    setFilmListType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    addFavoriteFilm(state, action: PayloadAction<number>) {
      state.favorite_films_ids.push(action.payload);
    },
    removeFavoriteFilm(state, action: PayloadAction<number>) {
      state.favorite_films_ids = state.favorite_films_ids.filter(
        (id) => id !== action.payload
      );
    },
    addWatchLaterFilm(state, action: PayloadAction<number>) {
      state.watch_later_films_ids.push(action.payload);
    },
    removeWatchLaterFilm(state, action: PayloadAction<number>) {
      state.watch_later_films_ids = state.watch_later_films_ids.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const {
  setFilmListType,
  addWatchLaterFilm,
  removeWatchLaterFilm,
  addFavoriteFilm,
  removeFavoriteFilm,
} = listTypeSlice.actions;
export default listTypeSlice.reducer;
