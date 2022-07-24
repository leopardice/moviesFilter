import { useSelector } from "react-redux";
import { IMovieCard, IStore } from "../../../../redux/rootDir/interfaces";
import { bookmarkTypes } from "../FiltersMenu/components/list-type-select";
import { SORTING_VALUES } from "../../../../shared/features/filter-values";
import { getFilmsData } from "../../../../shared/api/api";
import { useAppSelector } from "../../../../shared/hooks";
import { FILM_LIST_TYPES } from "../../../../shared/features/film-list-type";

const getFilmById = (savedId: number) => {
  const filmCard = getFilmsData().find((item) => item.id === savedId);
  if (filmCard === undefined) console.log("There is no such film");
  return filmCard as IMovieCard;
};

const getCardsByType = (): IMovieCard[] => {
  const type = useAppSelector((state) => state.listType.type);

  const favoriteFilmsIds = useAppSelector(
    (state) => state.listType.favorite_films_ids
  );
  const watchLaterFilmsIds = useAppSelector(
    (state) => state.listType.watch_later_films_ids
  );

  switch (type) {
    case FILM_LIST_TYPES.favorite_films:
      return favoriteFilmsIds.map((id) => getFilmById(id));
    case FILM_LIST_TYPES.watch_later_films:
      return watchLaterFilmsIds.map((id) => getFilmById(id));
    default:
      return getFilmsData();
  }
};

const filterByYear = (year: number): IMovieCard[] =>
  getCardsByType().filter(
    (item) => new Date(item.release_date).getFullYear() === year
  );

const sortMoviesList = (
  list: IMovieCard[],
  sortingValue: string
): IMovieCard[] => {
  switch (sortingValue) {
    case SORTING_VALUES.byPopularity.highToLow:
      return list.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    case SORTING_VALUES.byPopularity.lowToHigh:
      return list.sort((a, b) => (a.popularity > b.popularity ? 1 : -1));
    default:
      return list.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
  }
};

const isGenreInState = (genreIds: number[], stateGenres: number[]) =>
  genreIds.find((id) => stateGenres.includes(id));

const filterByGenres = (
  list: IMovieCard[],
  stateGenres: number[]
): IMovieCard[] =>
  list.filter(
    (item) => !stateGenres.length || isGenreInState(item.genre_ids, stateGenres)
  );

export const getFilteredList = (): IMovieCard[] => {
  const { releaseYear, sortingValue, chosenGenres } = useAppSelector(
    (state) => state.filterValues
  );
  const filteredByYear = filterByYear(releaseYear);
  const sortedList = sortMoviesList(filteredByYear, sortingValue);
  const filteredByGenres = filterByGenres(sortedList, chosenGenres);
  return filteredByGenres;
};
