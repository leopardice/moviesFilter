import { UPDATE_CARDS_TO_SHOW, UPDATE_MOVIES_DATA } from './types';

function updateMoviesData(moviesData) {
  return {
    type: UPDATE_MOVIES_DATA,
    moviesData,
  };
}

function updateCardsToShow(cardsToShow) {
  return {
    type: UPDATE_CARDS_TO_SHOW,
    cardsToShow,
  };
}
export default { updateCardsToShow, updateMoviesData };
