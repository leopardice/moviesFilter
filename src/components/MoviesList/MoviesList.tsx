import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { IMovieCard, IStore } from '../../interfaces';
import MovieCard from './MovieCard/MovieCard';
import {
  favoriteFilmsKey, getCardsList, getFilteredList, watchLaterKey,
} from './filterList';

const MoviesList = () => {
  const movieIndex = useSelector((state: IStore) => state.movieIndex);

  const showCurrentPageMovies = (moviesData: IMovieCard[], startIndex: number) : IMovieCard[] => {
    const endPosition = startIndex + 10;
    return moviesData.slice(startIndex, endPosition);
  };

  const cardsToShow = showCurrentPageMovies(getCardsList(watchLaterKey), movieIndex);

  return (
    <Grid item container xs={9} spacing={1}>
      {cardsToShow.map((movieInfo) => (
        <MovieCard
          key={movieInfo.id}
          id={movieInfo.id}
          rating={movieInfo.vote_average}
          title={movieInfo.title}
          detailsText={movieInfo.overview}
          imagePath={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path || movieInfo.backdrop_path}`}
        />
      ))}
    </Grid>
  );
};

export default MoviesList;
