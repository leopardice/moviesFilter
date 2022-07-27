import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import getFilteredList from "../../MoviesList/filterList";
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks";
import {
  nextPage,
  previousPage,
} from "../../../../../shared/features/current-page";
import { IMovieCard } from "../../../../../shared/api/api";

const getNumberOfPages = (array: IMovieCard[]): number =>
  Math.ceil(array.length / 10);

const Pagination = () => {
  const currentPage = useAppSelector((state) => state.currentPage.value);

  const numberOfPages = getNumberOfPages(getFilteredList());
  const backwardsButtonDisabled = currentPage === 1;
  const forwardButtonDisabled = currentPage === numberOfPages || !numberOfPages;

  const dispatch = useAppDispatch();

  const forwardButtonHandler = () => {
    dispatch(nextPage());
  };

  const backwardsButtonHandler = () => {
    dispatch(previousPage());
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Button
          variant="contained"
          disabled={backwardsButtonDisabled}
          onClick={backwardsButtonHandler}
        >
          Backwards
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          disabled={forwardButtonDisabled}
          onClick={forwardButtonHandler}
        >
          Forward
        </Button>
      </Grid>
      <Grid item xs={12}>
        {numberOfPages ? (
          <Typography variant="body1" component="p">
            {currentPage}
            {" of "}
            {numberOfPages}
          </Typography>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
export default Pagination;
