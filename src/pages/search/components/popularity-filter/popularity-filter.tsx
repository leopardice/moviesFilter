import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { SelectChangeEvent } from "@mui/material/Select";

export interface IPopularityFilterProp {
  popularity: string;
  onChange: (event: SelectChangeEvent) => void;
}

export const FILMS_BY_POPULARITY = {
  popular: "popular",
  unknown: "unknown",
};

const popularityLabels = Object.values(FILMS_BY_POPULARITY);

const PopularityFilter = ({ popularity, onChange }: IPopularityFilterProp) => {
  const popularityTittle = "Choose film's popularity";
  return (
    <Box>
      <Typography id="rating-filter" variant="body1" component="p">
        {popularityTittle}{" "}
      </Typography>
      <Select value={popularity} fullWidth onChange={onChange}>
        {popularityLabels.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default PopularityFilter;
