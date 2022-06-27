import React from 'react';
import {
  Grid, Paper, Stack, Typography, FormControl, InputLabel, Select,
} from '@mui/material';
import Button from '@mui/material/Button';
import SortingMenu from './components/SortingMenu';
import SelectYear from './components/SelectYear';
import GenreCheckboxes from './components/GenreCheckboxes';
import Pagination from './components/Pagination';

interface FilterMenuProps {
  onForwardClick: ()=> void;
}
const FiltersMenu = ({ onForwardClick }: FilterMenuProps) => (
  <Grid item xs={3}>
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h4">Фильтры:</Typography>
        <Button
          className="reset-filters"
          variant="contained"
          size="small"
          sx={{ backgroundColor: 'black' }}
        >
          Сбросить все фильтры
        </Button>
        <SortingMenu />
        <SelectYear />
        <GenreCheckboxes />
        <Pagination onForwardClick={onForwardClick} />
      </Stack>
    </Paper>
  </Grid>
);

export default FiltersMenu;
