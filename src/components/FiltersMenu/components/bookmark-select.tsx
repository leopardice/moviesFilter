import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FormControl, MenuItem, Select, Typography,
} from '@mui/material';

const bookmarkTypes = ['Избранное', 'Смотреть позже'];

const BookmarkSelect = () => (
  <div>
    <Typography variant="body2" component="p">Год релиза</Typography>
    <FormControl fullWidth>
      <Select>
        {bookmarkTypes.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
      </Select>
    </FormControl>
  </div>
);

export default BookmarkSelect;
