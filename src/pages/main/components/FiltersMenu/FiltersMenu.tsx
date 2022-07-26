import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import SortingMenu from "./components/SortingMenu";
import SelectYear from "./components/SelectYear";
import GenreCheckboxes from "./components/GenreCheckboxes";
import Pagination from "./components/Pagination";
import ResetFiltersButton from "./components/ResetFiltersButton";
import ListTypeSelect from "./components/list-type-select";
import { useAuthenticationStatus } from "../../../../shared/hooks";

const FiltersMenu = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  return (
    <Grid item xs={12} sm={3}>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Stack spacing={2}>
          {isAuthenticated ? <ListTypeSelect /> : ""}
          <Typography variant="h4" component="h4">
            Фильтры:
          </Typography>
          <ResetFiltersButton />
          <SortingMenu />
          <SelectYear />
          <GenreCheckboxes />
          <Pagination />
        </Stack>
      </Paper>
    </Grid>
  );
};
export default FiltersMenu;
