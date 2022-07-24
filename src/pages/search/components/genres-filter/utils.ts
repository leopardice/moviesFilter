import { IMovieCard } from "../../../../shared/api/api";

export const getFilmsByGenre = (
  filmList: IMovieCard[],
  id: number
): IMovieCard[] => filmList.filter((card) => card.genre_ids.includes(id));
