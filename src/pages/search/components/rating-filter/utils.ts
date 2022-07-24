import { IMovieCard } from "../../../../shared/api/api";
import { FILMS_BY_RATING } from "./rating-filter";

const filterByRating = (
  filmList: IMovieCard[],
  rating: string
): IMovieCard[] => {
  if (rating === FILMS_BY_RATING.high) {
    return filmList.filter((card) => card.vote_average > 5);
  }

  return filmList.filter((card) => card.vote_average <= 5);
};

export default filterByRating;
