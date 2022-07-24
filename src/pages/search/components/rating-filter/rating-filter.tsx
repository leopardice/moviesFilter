import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
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

const RatingFilter = ({ rating, onChange }: IRatingFilterProp) => {
  const ratingTittle = "Choose film's rating";
  return (
    <Box>
      <Typography id="rating-filter" variant="body1" component="p">
        {ratingTittle}{" "}
      </Typography>
      <Select value={rating} fullWidth onChange={onChange}>
        {ratingNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default RatingFilter;
