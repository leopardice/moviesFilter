import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { resetPage } from "../../../../../shared/features/current-page";
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks";
import { setReleaseYear } from "../../../../../shared/features/filter-values";

const YEARS = [2017, 2018, 2019, 2020];

const SelectYear = () => {
  const dispatch = useAppDispatch();
  const selectedYear = useAppSelector(
    (state) => state.filterValues.releaseYear
  );
  const yearValue = selectedYear.toString();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(resetPage());
    dispatch(setReleaseYear(+event.target.value as number));
  };

  return (
    <div>
      <Typography variant="body2" component="p">
        Release Year
      </Typography>
      <FormControl fullWidth>
        <Select onChange={handleChange} value={yearValue}>
          {YEARS.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectYear;
