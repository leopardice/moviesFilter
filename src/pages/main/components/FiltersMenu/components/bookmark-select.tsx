import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl, MenuItem, Select, Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { IStore } from '../../../../../redux/rootDir/interfaces';
import { setListType, setMovieIndex } from '../../../../../redux/rootDir/actions';

export const bookmarkTypes = ['Все фильмы', 'Избранное', 'Смотреть позже'];

const BookmarkSelect = () => {
  const bookMarkType = useSelector((state: IStore) => state.listType);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setMovieIndex(0));
    dispatch(setListType(event.target.value));
  };

  return (
    <div>
      <Typography variant="body2" component="p">Год релиза</Typography>
      <FormControl fullWidth>
        <Select onChange={handleChange} value={bookMarkType}>
          {bookmarkTypes.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};
export default BookmarkSelect;
