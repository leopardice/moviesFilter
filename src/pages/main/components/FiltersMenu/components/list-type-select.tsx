import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks";
import {
  FILM_LIST_TYPES,
  setFilmListType,
} from "../../../../../shared/features/film-list-type";
import { resetPage } from "../../../../../shared/features/current-page";

const LIST_TYPES = Object.values(FILM_LIST_TYPES);

const ListTypeSelect = () => {
  const listType = useAppSelector((state) => state.listType.type);

  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(resetPage());
    dispatch(setFilmListType(event.target.value));
  };

  return (
    <div>
      <Typography variant="body2" component="p">
        Release Year
      </Typography>
      <FormControl fullWidth>
        <Select onChange={handleChange} value={listType}>
          {LIST_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default ListTypeSelect;
