import { UPDATE_CARDS_TO_SHOW, UPDATE_MOVIES_DATA } from './types';

export function updateMoviesData(moviesData) {
  return {
    type: UPDATE_MOVIES_DATA,
    moviesData,
  };
}

export function updateCardsToShow(cardsToShow) {
  return {
    type: UPDATE_CARDS_TO_SHOW,
    cardsToShow,
  };
}
