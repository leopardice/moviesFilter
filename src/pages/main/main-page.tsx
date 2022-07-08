import React from 'react';
import { Container, Grid } from '@mui/material';
import FiltersMenu from './components/FiltersMenu/FiltersMenu';
import MoviesList from './components/MoviesList/MoviesList';

const MainPage = () => (
  <Container>
    <Grid container spacing={1}>
      <FiltersMenu />
      <MoviesList />
    </Grid>
  </Container>
);

export default MainPage;
