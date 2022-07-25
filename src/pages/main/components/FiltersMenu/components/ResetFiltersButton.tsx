import React from "react";
import Button from "@mui/material/Button";
import { resetFilterValues } from "../../../../../shared/features/filter-values";
import { useAppDispatch } from "../../../../../shared/hooks";
import { resetPage } from "../../../../../shared/features/current-page";

const ResetFiltersButton = () => {
  const dispatch = useAppDispatch();

  const resetFiltersHandler = () => {
    dispatch(resetPage());
    dispatch(resetFilterValues());
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
