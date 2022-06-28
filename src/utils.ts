import { IMovieCard } from './interfaces';
import MOVIES_DATA from './moviesData';

const getMoviesToShow = (moviesData: IMovieCard[], index: number) : IMovieCard[] => moviesData.slice(index, index + 10);

export const getCurrentPage = (index: number) : string => {
  const updatedIndex: number = index + 10;
  const currentPage: string = updatedIndex.toString().slice(0, -1);
  return currentPage;
};

export const getNumberOfPages = () : string => {
  const moviesDataLength = MOVIES_DATA.length;
  const numberOfPages = moviesDataLength.toString().slice(0, -1);
  return numberOfPages;
};

export default getMoviesToShow;
