import React from 'react';
import {
  FormControl, Select, Typography, MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { SORTING_VALUES } from '../../MoviesList/filterList';
import { setMovieIndex, setSortingValue } from '../../../../../redux/rootDir/actions';
import { IStore } from '../../../../../interfaces';

const SortingMenu = () => {
  const dispatch = useDispatch();
  const sortingValue = useSelector((state: IStore) => state.sortingValue);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSortingValue(event.target.value));
    dispatch(setMovieIndex(0));
  };

  return (
    <div>
      <Typography variant="body2" component="p">Сортировать по:</Typography>
      <FormControl fullWidth>
        <Select
          onChange={handleChange}
          value={sortingValue}
        >
          <MenuItem value={SORTING_VALUES.highToLow}>{SORTING_VALUES.highToLow}</MenuItem>
          <MenuItem value={SORTING_VALUES.lowToHigh}>
            {SORTING_VALUES.lowToHigh}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingMenu;
