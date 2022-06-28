import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Container, createTheme, Grid, responsiveFontSizes, ThemeProvider,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './components/MovieCard/MovieCard';
import FiltersMenu from './components/FiltersMenu/FiltersMenu';
import Header from './components/Header';
import { movieCard } from './interfaces';
import getMoviesToShow from './utils';
import MOVIES_DATA from '/src/moviesData.ts';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  const [movieIndex, setMovieIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getMoviesToShow(MOVIES_DATA, 0));

  const forwardButtonHandler = () => {
    setMovieIndex((prevState) => prevState + 10);
  };

  const backwardsButtonHandler = () => {
    setMovieIndex((prevState) => prevState - 10);
  };

  useEffect(() => {
    setCardsToShow(getMoviesToShow(MOVIES_DATA, movieIndex));
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
