import { combineReducers } from 'redux';
import moviesDataReducer from './reducers/moviesDataReducer';

export const rootReducer = combineReducers({
  moviesDataReducer,
});
