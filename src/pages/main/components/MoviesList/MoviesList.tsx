import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard/MovieCard";
import getFilteredList from "./filterList";
import { useAppSelector } from "../../../../shared/hooks";
import { IMovieCard } from "../../../../shared/api/api";
import { imgHost } from "../../../details/details-page";

const showCurrentPageCards = (
  moviesData: IMovieCard[],
  page: number
): IMovieCard[] => {
  const endPosition = page * 10 + 1;
  const start = endPosition - 10;
  return moviesData.slice(start, endPosition);
};

const MoviesList = () => {
  const currentPage = useAppSelector((state) => state.currentPage.value);

  const cardsToShow = showCurrentPageCards(getFilteredList(), currentPage);

  return (
    <Grid item container spacing={1} xs sm>
      {cardsToShow.map(
        ({ id, vote_average, title, poster_path, backdrop_path }) => (
          <MovieCard
            key={id}
            id={id}
            rating={vote_average}
            title={title}
            imagePath={`${imgHost}${poster_path || backdrop_path}`}
          />
        )
      )}
    </Grid>
  );
};

export default MoviesList;
