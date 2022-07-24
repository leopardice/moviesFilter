import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  clearGenres,
  setMovieIndex,
} from "../../../../../redux/rootDir/actions";
import {
  setReleaseYear,
  setSortingValue,
  SORTING_VALUES,
} from "../../../../../shared/features/filter-values";

const ResetFiltersButton = () => {
  const dispatch = useDispatch();

  const resetFiltersHandler = () => {
    dispatch(setSortingValue(SORTING_VALUES.byPopularity.highToLow));
    dispatch(setReleaseYear(2020));
    dispatch(setMovieIndex(0));
    dispatch(clearGenres());
  };

  return (
    <Button
      className="reset-filters"
      variant="contained"
      size="small"
      sx={{ backgroundColor: "black" }}
      onClick={resetFiltersHandler}
    >
      Сбросить все фильтры
    </Button>
  );
};

export default ResetFiltersButton;
