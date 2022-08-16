import React from "react";
import { Box } from "@mui/material";
import getFilteredList from "./filterList";
import { useAppSelector } from "../../../../shared/hooks";
import { IMovieCard } from "../../../../shared/api/api";
import { imgHost } from "../../../details/details-page";
import MovieCard from "./MovieCard/MovieCard";

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
    <Box display="block">
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
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
      </Box>
    </Box>
  );
};

export default MoviesList;
