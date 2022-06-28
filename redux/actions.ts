import { UPDATE_SORTING_VALUE } from './types';

export function updateMoviesData(moviesData) {
  return {
    type: UPDATE_MOVIES_DATA,
    moviesData,
  };
}

export function updateSortingValue(sortingValue) {
  return {
    type: UPDATE_SORTING_VALUE,
    sortingValue,
  };
}
