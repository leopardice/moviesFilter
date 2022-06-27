import { combineReducers } from 'redux';
import { moviesDataReducer } from './reducers/moviesDataReducer';
import { cardsToShowReducer } from './reducers/cardsToShowReducer';

const rootReducer = combineReducers({
  moviesDataReducer,
  cardsToShowReducer,
});

export default rootReducer;
