import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setMovieIndex, setReleaseYear, setSortingValue } from '../../../../redux/actions';
import { SORTING_VALUES } from '../../MoviesList/filterList';

const ResetFiltersButton = () => {
  const dispatch = useDispatch();

  const resetFiltersHandler = () => {
    dispatch(setSortingValue(SORTING_VALUES.highToLow));
    dispatch(setReleaseYear(2020));
    dispatch(setMovieIndex(0));
  };

  return (
    <Button
      className="reset-filters"
      variant="contained"
      size="small"
      sx={{ backgroundColor: 'black' }}
      onClick={resetFiltersHandler}
    >
      Сбросить все фильтры
    </Button>
  );
};

export default ResetFiltersButton;
