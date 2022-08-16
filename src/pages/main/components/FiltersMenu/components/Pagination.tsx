import React from "react";
import { Box, Button, Typography } from "@mui/material";
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
    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="12px">
      <Button
        variant="contained"
        disabled={backwardsButtonDisabled}
        onClick={backwardsButtonHandler}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        disabled={forwardButtonDisabled}
        onClick={forwardButtonHandler}
      >
        Next
      </Button>
      <Box gridColumn="1/-1" textAlign="center">
        {numberOfPages ? (
          <Typography variant="body1" component="p">
            {currentPage}
            {" of "}
            {numberOfPages}
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
export default Pagination;
