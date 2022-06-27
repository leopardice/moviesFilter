import { combineReducers } from 'redux';
import { moviesDataReducer } from './reducers/moviesDataReducer';
import { cardsToShowReducer } from './reducers/cardsToShowReducer';

export const rootReducer = combineReducers({
  moviesDataReducer,
  cardsToShowReducer,
});
