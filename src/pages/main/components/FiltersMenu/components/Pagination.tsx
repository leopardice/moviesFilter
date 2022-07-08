import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IMovieCard, IStore } from '../../../../../interfaces';
import { setMovieIndex } from '../../../../../redux/rootDir/actions';
import { getFilteredList } from '../../MoviesList/filterList';

const Pagination = () => {
  const getCurrentPage = (index: number) : number => {
    const currentPage = Math.round((index + 10) / 10);
    return currentPage;
  };

  const getNumberOfPages = (array: IMovieCard[]) : number => {
    const numberOfPages = Math.ceil((array.length) / 10);
    return numberOfPages;
  };

  const movieIndex = useSelector((state: IStore) => state.movieIndex);
  const currentPage = getCurrentPage(movieIndex);
  const numberOfPages = getNumberOfPages(getFilteredList());
  const backwardsButtonDisabled = (currentPage === 1);
  const forwardButtonDisabled = (currentPage === numberOfPages);

  const dispatch = useDispatch();

  const forwardButtonHandler = () => {
    dispatch(setMovieIndex(movieIndex + 10));
  };

  const backwardsButtonHandler = () => {
    dispatch(setMovieIndex(movieIndex - 10));
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Button variant="contained" disabled={backwardsButtonDisabled} onClick={backwardsButtonHandler}>Назад</Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" disabled={forwardButtonDisabled} onClick={forwardButtonHandler}>Вперед</Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="p">
          {currentPage}
          {' из '}
          {numberOfPages}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Pagination;
