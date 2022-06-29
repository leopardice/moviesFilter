import { useSelector } from 'react-redux';
import { IMovieCard, IStore } from '../../interfaces/interfaces';
import MOVIES_DATA from './moviesData';

export const SORTING_VALUES = {
  highToLow: 'Популярные по убыванию',
  lowToHigh: 'Популярные по возрастанию',
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
export const getFilteredList = (): IMovieCard[] => {
  const selectedYear = useSelector((state: IStore) => state.releaseYear);
  const sortingValue = useSelector((state: IStore) => state.sortingValue);
  const filteredByYear = filterByYear(selectedYear);
  const sortedList = sortMoviesList(filteredByYear, sortingValue);
  return sortedList;
};
