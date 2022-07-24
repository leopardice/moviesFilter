import React from "react";
import { FormControl, Select, Typography, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  setSortingValue,
  SORTING_VALUES,
} from "../../../../../shared/features/filter-values";
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks";
import { resetPage } from "../../../../../shared/features/current-page";

const SortingMenu = () => {
  const dispatch = useAppDispatch();
  const sortingValue = useAppSelector(
    (state) => state.filterValues.sortingValue
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSortingValue(event.target.value));
    dispatch(resetPage());
  };

  return (
    <div>
      <Typography variant="body2" component="p">
        Сортировать по:
      </Typography>
      <FormControl fullWidth>
        <Select onChange={handleChange} value={sortingValue}>
          <MenuItem value={SORTING_VALUES.byPopularity.highToLow}>
            {SORTING_VALUES.byPopularity.highToLow}
          </MenuItem>
          <MenuItem value={SORTING_VALUES.byPopularity.lowToHigh}>
            {SORTING_VALUES.byPopularity.lowToHigh}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingMenu;
