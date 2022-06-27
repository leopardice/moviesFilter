import React, { useState } from 'react';
import {
  FormControl, MenuItem, Select, Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const YEARS = [2018, 2019, 2020, 2021, 2022];

const SelectYear = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value as string);
  };

  return (
    <div>
      <Typography variant="body2" component="p">Год релиза</Typography>
      <FormControl fullWidth>
        <Select
          onChange={handleChange}
          value={selectedYear}
        >
          {YEARS.map((year) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectYear;
