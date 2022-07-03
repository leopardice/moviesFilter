import { useSelector } from 'react-redux';
import { IMovieCard, IStore } from '../../interfaces';
import MOVIES_DATA from './moviesData';

export const SORTING_VALUES = {
  highToLow: 'Популярные по убыванию',
  lowToHigh: 'Популярные по возрастанию',
};

export const favoriteFilmsKey = 'favoriteFilms';
export const watchLaterKey = 'watchLater';

const getFilmById = (savedId: number) => {
  const filmCard = MOVIES_DATA.find((item) => item.id === savedId);
  if (filmCard === undefined) console.log('There is no such film');
  return filmCard as IMovieCard;
};

const getCardsByIds = (key: string): IMovieCard[] => {
  const idsList: number[] = JSON.parse(localStorage.getItem(key) || '');
  return idsList.map((id) => getFilmById(id));
};

export const getCardsList = (type: string): IMovieCard[] => {
  switch (type) {
    case (favoriteFilmsKey):
      return getCardsByIds(favoriteFilmsKey);
    case (watchLaterKey):
      return getCardsByIds(watchLaterKey);
    default:
      return MOVIES_DATA;
  }
};

const filterByYear = (year: number): IMovieCard[] => MOVIES_DATA.filter((item) => new Date(item.release_date).getFullYear() === year);

const sortMoviesList = (list: IMovieCard[], sortingValue: string): IMovieCard[] => {
  switch (sortingValue) {
    case SORTING_VALUES.highToLow:
      return list.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    case SORTING_VALUES.lowToHigh:
      return list.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));
    default:
      return list.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
  }
};

const isGenreInState = (genreIds: number[], stateGenres: number[]) => genreIds.find((id) => stateGenres.includes(id));

const filterByGenres = (list: IMovieCard[], stateGenres: number[]): IMovieCard[] => list.filter((item) => !stateGenres.length || isGenreInState(item.genre_ids, stateGenres));

export const getFilteredList = (): IMovieCard[] => {
  const selectedYear = useSelector((state: IStore) => state.releaseYear);
  const sortingValue = useSelector((state: IStore) => state.sortingValue);
  const stateGenres = useSelector((state: IStore) => state.chosenGenres);
  const filteredByYear = filterByYear(selectedYear);
  const sortedList = sortMoviesList(filteredByYear, sortingValue);
  const filteredByGenres = filterByGenres(sortedList, stateGenres);
  return filteredByGenres;
};
