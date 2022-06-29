export const SET_SORTING_VALUE = 'UPDATE_SORTING_VALUE';
export const SET_MOVIE_INDEX = 'SET_MOVIE_INDEX';
export const SET_RELEASE_YEAR = 'SET_RELEASE_YEAR';

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
