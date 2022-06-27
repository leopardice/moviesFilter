import React from 'react';
import { Grid, Button, Typography } from '@mui/material';

interface PaginationProps {
  onForwardClick: ()=> void;
}

const Pagination = ({ onForwardClick }: PaginationProps) => (
  <Grid container spacing={0}>
    <Grid item xs={6}>
      <Button variant="contained">Назад</Button>
    </Grid>
    <Grid item xs={6}>
      <Button variant="contained" onClick={onForwardClick}>Вперед</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1" component="p">1 из 1500</Typography>
    </Grid>
  </Grid>
);

export default Pagination;
