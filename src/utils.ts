import { IMovieCard, IShowRequiredMovies, SORTING_VALUES } from './interfaces';
import MOVIES_DATA from './moviesData';

const getMoviesToShow = (moviesData: IMovieCard[], index: number) : IMovieCard[] => moviesData.slice(index, index + 10);

export const getCurrentPage = (index: number) : string => {
  const updatedIndex: number = index + 10;
  const currentPage: string = updatedIndex.toString().slice(0, -1);
  return currentPage;
};

export const getNumberOfPages = (array: IMovieCard[]) : string => {
  const moviesDataLength = array.length;
  const numberOfPages = moviesDataLength.toString().slice(0, -1);
  return numberOfPages;
};

const sortMoviesArray = (array: IMovieCard[], sortingValue: string): IMovieCard[] => {
  switch (sortingValue) {
    case SORTING_VALUES.highToLow:
      return array.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    case SORTING_VALUES.lowToHigh:
      return array.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));
    default:
      return array.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
  }
};

export const showRequiredMovies = (year: number = 2020, sortingValue: string = SORTING_VALUES.highToLow) : IShowRequiredMovies => {
  const sortedByYear = MOVIES_DATA.filter((item) => new Date(item.release_date).getFullYear() === year);
  const sortedByValue = sortMoviesArray(sortedByYear, sortingValue);
  const numberOfPages = getNumberOfPages(sortedByValue);
  return { sortedByValue, numberOfPages };
};

export default getMoviesToShow;
