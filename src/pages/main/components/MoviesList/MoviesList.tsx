import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard/MovieCard";
import getFilteredList from "./filterList";
import { useAppSelector } from "../../../../shared/hooks";
import { IMovieCard } from "../../../../shared/api/api";

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
    <Grid item container xs={9} spacing={1}>
      {cardsToShow.map((movieInfo) => (
        <MovieCard
          key={movieInfo.id}
          id={movieInfo.id}
          rating={movieInfo.vote_average}
          title={movieInfo.title}
          detailsText={movieInfo.overview}
          imagePath={`https://image.tmdb.org/t/p/w500/${
            movieInfo.poster_path || movieInfo.backdrop_path
          }`}
        />
      ))}
    </Grid>
  );
};

export default MoviesList;
