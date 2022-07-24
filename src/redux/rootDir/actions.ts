export const SET_SORTING_VALUE = "UPDATE_SORTING_VALUE";
export const SET_MOVIE_INDEX = "SET_MOVIE_INDEX";
export const SET_CURRENT_PAGE = "CURRENT_PAGE";
export const SET_RELEASE_YEAR = "SET_RELEASE_YEAR";
export const ADD_GENRE = "ADD_GENRE";
export const REMOVE_GENRE = "REMOVE_GENRE";
export const CLEAR_GENRES = "CLEAR_GENRES";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
export const ADD_FILM_FAVORITE = "ADD_FILM_FAVORITE";
export const REMOVE_FILM_FAVORITE = "REMOVE_FILM_FAVORITE";
export const SET_FILM_FAVORITE = "SET_FILM_FAVORITE";
export const ADD_FILM_WATCH_LATER = "ADD_FILM_WATCH_LATER";
export const REMOVE_FILM_WATCH_LATER = "REMOVE_FILM_WATCH_LATER";
export const SET_WATCH_LATER_FILMS = "SET_WATCH_LATER_FILMS";
export const SET_LIST_TYPE = "SET_LIST_TYPE";
export const SET_RECOMMENDED_FILM_GENRE = "SET_RECOMMENDED_FILM_GENRE";
export const SET_RECOMMENDED_FILM_RATING = "SET_RECOMMENDED_FILM_RATING";
export const SET_RECOMMENDED_FILM_POPULARITY =
  "SET_RECOMMENDED_FILM_POPULARITY";

export function setCurrentPage(currentPage: number) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}

export function setMovieIndex(movieIndex: number) {
  return {
    type: SET_MOVIE_INDEX,
    movieIndex,
  };
}

function setReleaseYear(releaseYear: number) {
  return {
    type: SET_RELEASE_YEAR,
    releaseYear,
  };
}

function setSortingValue(sortingValue: string) {
  return {
    type: SET_SORTING_VALUE,
    sortingValue,
  };
}

export function addGenre(genreId: number) {
  return {
    type: ADD_GENRE,
    genreId,
  };
}

export function removeGenre(genreId: number) {
  return {
    type: REMOVE_GENRE,
    genreId,
  };
}

export function clearGenres() {
  return {
    type: CLEAR_GENRES,
  };
}

function logIn() {
  return {
    type: LOG_IN,
  };
}

function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function openLoginModal() {
  return {
    type: OPEN_LOGIN_MODAL,
  };
}

export function closeLoginModal() {
  return {
    type: CLOSE_LOGIN_MODAL,
  };
}

export function addFilmFavorite(filmId: number) {
  return {
    type: ADD_FILM_FAVORITE,
    filmId,
  };
}

export function removeFilmFavorite(filmId: number) {
  return {
    type: REMOVE_FILM_FAVORITE,
    filmId,
  };
}

export function setFilmFavorite(filmList: number[]) {
  return {
    type: SET_FILM_FAVORITE,
    filmList,
  };
}

export function addFilmWatchLater(filmId: number) {
  return {
    type: ADD_FILM_WATCH_LATER,
    filmId,
  };
}

export function removeFilmWatchLater(filmId: number) {
  return {
    type: REMOVE_FILM_WATCH_LATER,
    filmId,
  };
}

export function setWatchLaterFilms(filmList: number[]) {
  return {
    type: SET_WATCH_LATER_FILMS,
    filmList,
  };
}

export function setListType(listType: string) {
  return {
    type: SET_LIST_TYPE,
    listType,
  };
}

export function setRecommendedGenre(genre: string) {
  return {
    type: SET_RECOMMENDED_FILM_GENRE,
    genre,
  };
}

export function setRecommendedFilmRating(rating: string) {
  return {
    type: SET_RECOMMENDED_FILM_RATING,
    rating,
  };
}

export function setRecommendedFilmPopularity(popularity: string) {
  return {
    type: SET_RECOMMENDED_FILM_POPULARITY,
    popularity,
  };
}
