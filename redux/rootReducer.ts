import { combineReducers } from 'redux';
import { moviesDataReducer } from './reducers/moviesDataReducer';
import { sortingValuesReducer } from './reducers/sortingValuesReducer';

const rootReducer = combineReducers({
  sortingValuesReducer,
});

export default rootReducer;
