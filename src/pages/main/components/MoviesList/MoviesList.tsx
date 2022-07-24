import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { IMovieCard, IStore } from "../../../../redux/rootDir/interfaces";
import MovieCard from "./MovieCard/MovieCard";
import { getFilteredList } from "./filterList";
import MOVIES_DATA, { getFilmsData } from "../../../../shared/api/api";
import { useAppSelector } from "../../../../shared/hooks";

const MoviesList = () => {
  const currentPage = useAppSelector((state) => state.currentPage.value);

  const showCurrentPageCards = (
    moviesData: IMovieCard[],
    page: number
  ): IMovieCard[] => {
    const endPosition = page * 10 + 1;
    const start = endPosition - 10;
    return moviesData.slice(start, endPosition);
  };

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
