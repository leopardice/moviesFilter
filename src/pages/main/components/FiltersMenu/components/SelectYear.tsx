import React from 'react';
import {
  FormControl, MenuItem, Select, Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieIndex, setReleaseYear } from '../../../../../redux/rootDir/actions';
import { IStore } from '../../../../../redux/rootDir/interfaces';

const YEARS = [2017, 2018, 2019, 2020];

const SelectYear = () => {
  const dispatch = useDispatch();
  const selectedYear = useSelector((state: IStore) => state.releaseYear);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setMovieIndex(0));
    dispatch(setReleaseYear(+event.target.value as number));
  };

  return (
    <div>
      <Typography variant="body2" component="p">Год релиза</Typography>
      <FormControl fullWidth>
        <Select
          onChange={handleChange}
          value={selectedYear.toString()}
        >
          {YEARS.map((year) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectYear;
