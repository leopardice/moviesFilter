import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Container, createTheme, Grid, responsiveFontSizes, ThemeProvider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MovieCard from './components/MovieCard/MovieCard';
import FiltersMenu from './components/FiltersMenu/FiltersMenu';
import Header from './components/Header';
import getMoviesToShow, { showRequiredMovies } from './utils';
import { IStore } from './interfaces';
import MOVIES_DATA from './moviesData';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  const [moviesArray, setMoviesArray] = useState(showRequiredMovies().sortedArray);
  const [movieIndex, setMovieIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getMoviesToShow(moviesArray, 0));

  const forwardButtonHandler = () => {
    setMovieIndex((prevState) => prevState + 10);
  };

  const backwardsButtonHandler = () => {
    setMovieIndex((prevState) => prevState - 10);
  };

  const sortingValues = useSelector((state: IStore) => {
    const { sortingValuesReducer } = state;
    return sortingValuesReducer;
  });

  useEffect(() => {
    setMoviesArray(showRequiredMovies(sortingValues.year, sortingValues.sortingValue).sortedArray);
  }, [sortingValues]);

  useEffect(() => {
    setCardsToShow(getMoviesToShow(moviesArray, movieIndex));
  }, [movieIndex]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container>
          <Grid container spacing={1}>
            <FiltersMenu
              onForwardClick={forwardButtonHandler}
              onBackwardClick={backwardsButtonHandler}
              index={movieIndex}
            />
            <Grid item container xs={9} spacing={1}>
              {cardsToShow.map((movieInfo) => (
                <MovieCard
                  key={movieInfo.id}
                  rating={movieInfo.vote_average}
                  title={movieInfo.title}
                  detailsText={movieInfo.overview}
                  imagePath={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path || movieInfo.backdrop_path}`}
                />
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default App;
