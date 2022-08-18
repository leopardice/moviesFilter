import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
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
      <FormControl>
        <FormLabel id="rating-filter">{popularityTittle}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="rating-filter"
          name="rating-filter"
          value={popularity}
          onChange={onChange}
        >
          {popularityLabels.map((name) => (
            <FormControlLabel value={name} control={<Radio />} label={name} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default PopularityFilter;
