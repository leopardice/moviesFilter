import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { getGenresData } from "../../../../shared/api/api";

export interface IGenreFilterProp {
  genre: string;
  onChange: (event: SelectChangeEvent) => void;
}

const GenresFilter = ({ genre, onChange }: IGenreFilterProp) => {
  const genresTitle = "Choose film's genre:";
  return (
    <div>
      <Typography variant="body1" component="p">
        {genresTitle}
      </Typography>
      <FormControl fullWidth>
        <Select onChange={onChange} value={genre}>
          {getGenresData().map(({ name, id }) => (
            <MenuItem key={id} value={id.toString()}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default GenresFilter;
