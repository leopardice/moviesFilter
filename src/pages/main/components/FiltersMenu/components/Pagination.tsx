import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { IMovieCard } from "../../../../../redux/rootDir/interfaces";
import { getFilteredList } from "../../MoviesList/filterList";
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks";
import {
  nextPage,
  previousPage,
} from "../../../../../shared/features/current-page";

const getNumberOfPages = (array: IMovieCard[]): number => {
  const numberOfPages = Math.ceil(array.length / 10);
  return numberOfPages;
};

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
          Назад
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          disabled={forwardButtonDisabled}
          onClick={forwardButtonHandler}
        >
          Вперед
        </Button>
      </Grid>
      <Grid item xs={12}>
        {numberOfPages ? (
          <Typography variant="body1" component="p">
            {currentPage}
            {" из "}
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
