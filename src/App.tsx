import React from 'react';
import './App.css';
import {
  Container, createTheme, Grid, responsiveFontSizes, ThemeProvider,
} from '@mui/material';
import FiltersMenu from './components/FiltersMenu/FiltersMenu';
import Header from './components/Header/Header';
import MoviesList from './components/MoviesList/MoviesList';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Container>
        <Grid container spacing={1}>
          <FiltersMenu />
          <MoviesList />
        </Grid>
      </Container>
    </div>
  </ThemeProvider>
);
export default App;
