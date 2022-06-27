import React from 'react';
import {
  FormControl, Select, Typography, MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const SORTING_VALUES = {
  highToLow: 'Популярные по убыванию',
  lowToHigh: 'Популярные по возрастанию',
};

const SortingMenu = () => {
  const [sortValue, setSortValue] = React.useState('Популярные по убыванию');

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
  };

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
