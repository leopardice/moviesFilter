import React, { useEffect } from 'react';
import {
  FormControl, Select, Typography, MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { updateSortingValue } from '../../../../redux/actions';

const SORTING_VALUES = {
  highToLow: 'Популярные по убыванию',
  lowToHigh: 'Популярные по возрастанию',
};

const SortingMenu = () => {
  const [sortValue, setSortValue] = React.useState(SORTING_VALUES.highToLow);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
  };

  useEffect(() => {
    dispatch(updateSortingValue(sortValue));
  }, [sortValue]);

  return (
    <div>
      <Typography variant="body2" component="p">Сортировать по:</Typography>
      <FormControl fullWidth>
        <Select
          onChange={handleChange}
          value={sortValue}
        >
          <MenuItem value={SORTING_VALUES.highToLow}>
            {SORTING_VALUES.highToLow}
          </MenuItem>
          <MenuItem value={SORTING_VALUES.lowToHigh}>
            {SORTING_VALUES.lowToHigh}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingMenu;
