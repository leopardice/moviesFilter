import React from 'react';
import {
  Grid, Paper, Stack, Typography, FormControl, InputLabel, Select,
} from '@mui/material';
import Button from '@mui/material/Button';
import SortingMenu from './components/SortingMenu';
import SelectYear from './components/SelectYear';
import GenreCheckboxes from './components/GenreCheckboxes';
import Pagination from './components/Pagination';
import ResetFiltersButton from './components/ResetFiltersButton';

const FiltersMenu = () => (
  <Grid item xs={3}>
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h4">Фильтры:</Typography>
        <ResetFiltersButton />
        <SortingMenu />
        <SelectYear />
        <GenreCheckboxes />
        <Pagination />
      </Stack>
    </Paper>
  </Grid>
);

export default FiltersMenu;
