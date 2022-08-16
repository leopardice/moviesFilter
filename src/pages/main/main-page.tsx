import React, { useState } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import FiltersMenu from "./components/FiltersMenu/FiltersMenu";
import MoviesList from "./components/MoviesList/MoviesList";
import FilterButton from "./components/FiltersMenu/components/show-filters-button";

const MainPage = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("lg"));
  const tabletSmall = useMediaQuery(theme.breakpoints.down("md"));

  const flexDirection = tablet ? "column" : "row";

  const [filterModal, setFilterModal] = useState(false);

  const filterButtonHandler = () => {
    setFilterModal((prevState) => !prevState);
  };

  return (
    <Container>
      <Box display="flex" gap="10px" flexDirection={flexDirection}>
        {!tablet && <FiltersMenu />}
        {filterModal && <FiltersMenu />}
        {tablet && (
          <FilterButton onClick={filterButtonHandler} isOpen={filterModal} />
        )}
        <MoviesList tabletSmall={tabletSmall} />
      </Box>
    </Container>
  );
};

export default MainPage;
