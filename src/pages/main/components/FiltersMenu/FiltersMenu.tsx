import React from 'react';
import {
  Grid, Paper, Stack, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import SortingMenu from './components/SortingMenu';
import SelectYear from './components/SelectYear';
import GenreCheckboxes from './components/GenreCheckboxes';
import Pagination from './components/Pagination';
import ResetFiltersButton from './components/ResetFiltersButton';
import { IStore } from '../../../../redux/rootDir/interfaces';
import BookmarkSelect from './components/bookmark-select';

const FiltersMenu = () => {
  const isLoggedIn = useSelector((state: IStore) => state.isLoggedIn);

  return (
    <Grid item xs={3}>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Stack spacing={2}>
          {/* {isLoggedIn */}
          {/*   ? <BookmarkSelect /> */}
          {/*   : ''} */}
          {/* <Typography variant="h4" component="h4">Фильтры:</Typography> */}
          {/* <ResetFiltersButton /> */}
          {/* <SortingMenu /> */}
          {/* <SelectYear /> */}
          {/* <GenreCheckboxes /> */}
          <Pagination />
        </Stack>
      </Paper>
    </Grid>
  );
};
export default FiltersMenu;
