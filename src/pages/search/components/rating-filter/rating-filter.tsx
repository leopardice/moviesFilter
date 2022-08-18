import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

export interface IRatingFilterProp {
  rating: string;
  onChange: (event: SelectChangeEvent) => void;
}

export const FILMS_BY_RATING = {
  high: "High",
  low: "Low",
};

const ratingNames = Object.values(FILMS_BY_RATING);

const RatingFilter = ({ rating, onChange }: IRatingFilterProp) => (
  <Box>
    <FormControl>
      <FormLabel id="rating-filter">Choose film rating</FormLabel>
      <RadioGroup
        row
        aria-labelledby="rating-filter"
        name="rating-filter"
        value={rating}
        onChange={onChange}
      >
        {ratingNames.map((name) => (
          <FormControlLabel value={name} control={<Radio />} label={name} />
        ))}
      </RadioGroup>
    </FormControl>
  </Box>
);

export default RatingFilter;
