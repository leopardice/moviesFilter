import { IMovieCard } from "../../../shared/api/api";
import { getFilmsByGenre } from "./genres-filter/utils";
import filterByRating from "./rating-filter/utils";
import getFilmsByPopularity from "./popularity-filter/utils";

const getRecommendedFilms = (
  filmList: IMovieCard[],
  genreId: number,
  rating: string,
  popularity: string
) => {
  const filmsByGenre = getFilmsByGenre(filmList, genreId);
  const filmsByRating = filterByRating(filmsByGenre, rating);
  const filmsByPopularity = getFilmsByPopularity(filmsByRating, popularity);
  return filmsByPopularity;
};

export default getRecommendedFilms;
