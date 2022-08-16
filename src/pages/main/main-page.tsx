import React, { useState } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import FiltersMenu from "./components/FiltersMenu/FiltersMenu";
import MoviesList from "./components/MoviesList/MoviesList";
import FilterButton from "./components/FiltersMenu/components/show-filters-button";

const MainPage = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.only("xs"));

  const [filterModal, setFilterModal] = useState(false);

  const filterButtonHandler = () => {
    setFilterModal((prevState) => !prevState);
  };

  return (
    <Container>
      <Box display="flex" gap="10px">
        {!phone && <FiltersMenu />}
        {filterModal && <FiltersMenu />}
        {phone && (
          <FilterButton onClick={filterButtonHandler} isOpen={filterModal} />
        )}
        <MoviesList />
      </Box>
    </Container>
  );
};

export default MainPage;
