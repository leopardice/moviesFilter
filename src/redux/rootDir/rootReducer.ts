import { combineReducers } from 'redux';
import {
  ADD_GENRE,
  SET_MOVIE_INDEX,
  SET_RELEASE_YEAR,
  SET_SORTING_VALUE,
  REMOVE_GENRE,
  CLEAR_GENRES,
  LOG_IN,
  LOG_OUT,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  ADD_FILM_FAVORITE,
  REMOVE_FILM_FAVORITE,
  ADD_FILM_WATCH_LATER,
  REMOVE_FILM_WATCH_LATER,
  SET_LIST_TYPE,
  SET_RECOMMENDED_FILM_GENRE,
  SET_RECOMMENDED_FILM_RATING,
  SET_RECOMMENDED_FILM_POPULARITY,
  SET_FILM_FAVORITE, SET_WATCH_LATER_FILMS, SET_CURRENT_PAGE,
} from './actions';
import { SORTING_VALUES } from '../../pages/main/components/MoviesList/filterList';
import { FILMS_BY_POPULARITY, FILMS_BY_RATING, LOCAL_STORAGE_KEYS } from '../../utils';
import { bookmarkTypes } from '../../pages/main/components/FiltersMenu/components/bookmark-select';

type currentPageType = {
  type: string,
  currentPage?: number
};

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
  filmList: number[]
}

type listTypeType = {
  type: string,
  listType: string
}

type recommendedFilmInfoType = {
  type: string,
  genre: string,
  rating: string,
  popularity: string
}

export const currentPage = (state = 1, action: currentPageType) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.currentPage;
    default:
      return state;
  }
};

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

const favoriteFilms = (state:number[] = [], action: storageListType) => {
  const { type, filmId, filmList } = action;
  let nextState: number[] = [];
  switch (type) {
    case ADD_FILM_FAVORITE:
      nextState = [...state, filmId];
      localStorage.setItem(LOCAL_STORAGE_KEYS.favoriteFilmsKey, JSON.stringify(nextState));
      return nextState;
    case REMOVE_FILM_FAVORITE:
      nextState = state.filter((id) => id !== filmId);
      localStorage.setItem(LOCAL_STORAGE_KEYS.favoriteFilmsKey, JSON.stringify(nextState));
      return nextState;
    case SET_FILM_FAVORITE:
      return filmList;
    default:
      return state;
  }
};

const watchLaterFilms = (state: number[] = [], action: storageListType) => {
  const { type, filmId, filmList } = action;
  let nextState: number[] = [];
  switch (type) {
    case ADD_FILM_WATCH_LATER:
      nextState = [...state, filmId];
      localStorage.setItem(LOCAL_STORAGE_KEYS.watchLaterKey, JSON.stringify(nextState));
      return nextState;
    case REMOVE_FILM_WATCH_LATER:
      nextState = state.filter((id) => id !== filmId);
      localStorage.setItem(LOCAL_STORAGE_KEYS.watchLaterKey, JSON.stringify(nextState));
      return nextState;
    case SET_WATCH_LATER_FILMS:
      return filmList;
    default:
      return state;
  }
};

const listType = (state: string = bookmarkTypes[0], action: listTypeType) => {
  switch (action.type) {
    case SET_LIST_TYPE:
      return action.listType;
    default:
      return state;
  }
};

export const recommendedFilmInfo = (state = { genre: '35', rating: FILMS_BY_RATING.high, popularity: FILMS_BY_POPULARITY.popular }, action: recommendedFilmInfoType) => {
  const {
    type,
    genre,
    rating,
    popularity,
  } = action;

  switch (type) {
    case SET_RECOMMENDED_FILM_GENRE:
      return {
        ...state,
        genre,
      };
    case SET_RECOMMENDED_FILM_RATING:
      return {
        ...state,
        rating,
      };
    case SET_RECOMMENDED_FILM_POPULARITY:
      return {
        ...state,
        popularity,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentPage,
  releaseYear,
  sortingValue,
  chosenGenres,
  isLoggedIn,
  isLoginModalOpen,
  favoriteFilms,
  watchLaterFilms,
  listType,
  recommendedFilmInfo,
});

export default rootReducer;
