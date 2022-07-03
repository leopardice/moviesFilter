export const SET_SORTING_VALUE = 'UPDATE_SORTING_VALUE';
export const SET_MOVIE_INDEX = 'SET_MOVIE_INDEX';
export const SET_RELEASE_YEAR = 'SET_RELEASE_YEAR';
export const ADD_GENRE = 'ADD_GENRE';
export const REMOVE_GENRE = 'REMOVE_GENRE';
export const CLEAR_GENRES = 'CLEAR_GENRES';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
export const ADD_FILM_FAVORITE = 'ADD_FILM_FAVORITE';
export const REMOVE_FILM_FAVORITE = 'REMOVE_FILM_FAVORITE';

export function setMovieIndex(movieIndex: number) {
  return {
    type: SET_MOVIE_INDEX,
    movieIndex,
  };
}

export function setReleaseYear(releaseYear: number) {
  return {
    type: SET_RELEASE_YEAR,
    releaseYear,
  };
}

export function setSortingValue(sortingValue: string) {
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

export function logIn() {
  return {
    type: LOG_IN,
  };
}

export function logOut() {
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
