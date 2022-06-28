import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { getCurrentPage, getNumberOfPages, showRequiredMovies } from '../../../utils';

interface PaginationProps {
  onForwardClick: () => void;
  index: number;
  onBackwardClick: () => void;
}

const Pagination = ({
  onForwardClick, onBackwardClick, index,
}: PaginationProps) => {
  const currentPage = getCurrentPage(index);
  const { numberOfPages } = showRequiredMovies();
  const backwardsButtonDisabled = (+currentPage === 1);
  const forwardButtonDisabled = (+currentPage === +numberOfPages);

  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <Button variant="contained" disabled={backwardsButtonDisabled} onClick={onBackwardClick}>Назад</Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" disabled={forwardButtonDisabled} onClick={onForwardClick}>Вперед</Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="p">
          {currentPage}
          {' из '}
          {numberOfPages}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Pagination;
