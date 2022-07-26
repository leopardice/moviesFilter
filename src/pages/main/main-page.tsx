import React, { useState } from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import FiltersMenu from "./components/FiltersMenu/FiltersMenu";
import MoviesList from "./components/MoviesList/MoviesList";
import FilterButton from "./components/FiltersMenu/components/show-filters-button";

const MainPage = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.only("xs"));

  const gridDirection = phone ? "column" : "row";

  const [filterModal, setFilterModal] = useState(false);

  const filterButtonHandler = () => {
    setFilterModal((prevState) => !prevState);
  };

  return (
    <Container>
      <Grid container spacing={1} direction={gridDirection}>
        {!phone && <FiltersMenu />}
        {filterModal && <FiltersMenu />}
        {phone && (
          <FilterButton onClick={filterButtonHandler} isOpen={filterModal} />
        )}
        <MoviesList />
      </Grid>
    </Container>
  );
};

export default MainPage;
