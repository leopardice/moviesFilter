import { UPDATE_SORTING_VALUE } from '../types';
import { SORTING_VALUES } from '../../src/interfaces';

const initialState = {
  year: 2020,
  sortingValue: SORTING_VALUES.highToLow,
};

export const sortingValuesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_SORTING_VALUE:
      return { ...state, sortingValue: action.sortingValue };
    default:
      return state;
  }
};
