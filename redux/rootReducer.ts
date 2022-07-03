import { combineReducers } from 'redux';
import {
  ADD_GENRE,
  SET_MOVIE_INDEX,
  SET_RELEASE_YEAR,
  SET_SORTING_VALUE,
  REMOVE_GENRE,
  CLEAR_GENRES,
  LOG_IN, LOG_OUT, OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, ADD_FILM_FAVORITE, REMOVE_FILM_FAVORITE,
} from './actions';
import { SORTING_VALUES } from '../src/components/MoviesList/filterList';
import { LOCAL_STORAGE_KEYS } from '../src/utils';

type movieIndexType = {
  type: string,
  movieIndex: number
};

type releaseYearType = {
  type: string,
  releaseYear: number
}

type sortingValueType = {
  type: string,
  sortingValue: string
}

type chosenGenresType = {
  type: string,
  genreId?: number,
}

type isLoggedInType = {
  type: string
}

type storageListType = {
  type: string,
  filmId: number
}

export const movieIndex = (state = 0, action: movieIndexType) => {
  switch (action.type) {
    case SET_MOVIE_INDEX:
      return action.movieIndex;
    default:
      return state;
  }
};

export const releaseYear = (state = 2020, action: releaseYearType) => {
  switch (action.type) {
    case SET_RELEASE_YEAR:
      return action.releaseYear;
    default:
      return state;
  }
};

const sortingValue = (state = SORTING_VALUES.highToLow, action: sortingValueType) => {
  switch (action.type) {
    case SET_SORTING_VALUE:
      return action.sortingValue;
    default:
      return state;
  }
};

const chosenGenres = (state: number[] = [], action: chosenGenresType) => {
  const { type, genreId } = action;
  switch (type) {
    case ADD_GENRE:
      return [...state, genreId];
    case REMOVE_GENRE:
      return [...state].filter((item) => item !== genreId);
    case CLEAR_GENRES:
      return [];
    default:
      return state;
  }
};

const isLoggedIn = (state: boolean = false, action: isLoggedInType) => {
  switch (action.type) {
    case LOG_IN:
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    case LOG_OUT:
      localStorage.setItem('isLoggedIn', 'false');
      return false;
    default:
      return state;
  }
};

const isLoginModalOpen = (state: boolean = false, action: isLoggedInType) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return true;
    case CLOSE_LOGIN_MODAL:
      return false;
    default:
      return state;
  }
};

const favoriteFilms = (state: number[] = [], action: storageListType) => {
  const { type, filmId } = action;
  let nextState: number[] = [];
  switch (type) {
    case ADD_FILM_FAVORITE:
      nextState = [...state, filmId];
      localStorage.setItem(LOCAL_STORAGE_KEYS.favoriteFilmsKey, JSON.stringify(nextState));
      console.log(nextState);
      return nextState;
    case REMOVE_FILM_FAVORITE:
      nextState = state.filter((id) => id !== filmId);
      localStorage.setItem(LOCAL_STORAGE_KEYS.favoriteFilmsKey, JSON.stringify(nextState));
      console.log(nextState);
      return nextState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movieIndex,
  releaseYear,
  sortingValue,
  chosenGenres,
  isLoggedIn,
  isLoginModalOpen,
  favoriteFilms,
});

export default rootReducer;
