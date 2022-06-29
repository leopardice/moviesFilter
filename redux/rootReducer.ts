import { combineReducers } from 'redux';
import { SET_MOVIE_INDEX, SET_RELEASE_YEAR, SET_SORTING_VALUE } from './actions';
import { SORTING_VALUES } from '../src/components/MoviesList/filterList';

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

const rootReducer = combineReducers({
  movieIndex,
  releaseYear,
  sortingValue,
});

export default rootReducer;
