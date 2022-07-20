import { useSelector } from 'react-redux';
import { IMovieCard, IStore } from '../../../../redux/rootDir/interfaces';
import MOVIES_DATA from '../../../../shared/api/moviesData';
import { bookmarkTypes } from '../FiltersMenu/components/bookmark-select';

export const SORTING_VALUES = {
  highToLow: 'Популярные по убыванию',
  lowToHigh: 'Популярные по возрастанию',
};

const getFilmById = (savedId: number) => {
  const filmCard = MOVIES_DATA.find((item) => item.id === savedId);
  if (filmCard === undefined) console.log('There is no such film');
  return filmCard as IMovieCard;
};

const getCardsByType = (): IMovieCard[] => {
  const type = useSelector((state: IStore) => state.listType);
  const idListFavorite = useSelector((state: IStore) => state.favoriteFilms);
  const idListWatchLater = useSelector((state: IStore) => state.watchLaterFilms);
  switch (type) {
    case (bookmarkTypes[1]):
      return idListFavorite.map((id) => getFilmById(id));
    case (bookmarkTypes[2]):
      return idListWatchLater.map((id) => getFilmById(id));
    default: return MOVIES_DATA;
  }
};

const filterByYear = (year: number): IMovieCard[] => getCardsByType().filter((item) => new Date(item.release_date).getFullYear() === year);

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
