import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

interface IFilterButton {
  onClick: () => void;
  isOpen: boolean;
}

const FilterButton = ({ onClick, isOpen }: IFilterButton) => {
  const label = isOpen ? "Hide Filters" : "Show Filters";
  return (
    <Grid item>
      <Button
        className="show-filter"
        variant="contained"
        size="small"
        onClick={onClick}
        fullWidth
      >
        {label}{" "}
      </Button>
    </Grid>
  );
};

export default FilterButton;
