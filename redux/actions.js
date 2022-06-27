import { UPDATE_MOVIES_DATA } from './types';

export default function updateMoviesData(moviesData) {
  return {
    type: UPDATE_MOVIES_DATA,
    moviesData,
  };
}
