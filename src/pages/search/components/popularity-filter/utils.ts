import { FILMS_BY_POPULARITY } from "./popularity-filter";
import { IMovieCard } from "../../../../shared/api/api";

const getFilmsByPopularity = (
  filmList: IMovieCard[],
  popularity: string
): IMovieCard[] => {
  if (popularity === FILMS_BY_POPULARITY.popular) {
    return filmList.filter(
      (card) => card.popularity > 100 && card.vote_count > 200
    );
  }

  return filmList.filter(
    (card) => card.popularity <= 100 && card.vote_count <= 200
  );
};

export default getFilmsByPopularity;
