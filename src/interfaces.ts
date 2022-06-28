import { sortingValuesReducer } from '../redux/reducers/sortingValuesReducer';

export interface IMovieCard {
  overview: string;
  original_language: string;
  original_title: string;
  video: boolean;
  title: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string | null;
  release_date: string;
  popularity: number;
  vote_average: number;
  id: number;
  adult: boolean;
  vote_count: number
}

export interface IShowRequiredMovies {
  sortedByValue: IMovieCard[],
  numberOfPages: string
}

export interface IStore {
  sortingValuesReducer: {
    year: number,
    sortingValue: string
  }
}

export const SORTING_VALUES = {
  highToLow: 'Популярные по убыванию',
  lowToHigh: 'Популярные по возрастанию',
};
