import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { getFilmsData } from "../../shared/api/api";
import GenresFilter from "./components/genres-filter/genres-filter";
import RatingFilter from "./components/rating-filter/rating-filter";
import getRecommendedFilms from "./components/utils";
import PopularityFilter from "./components/popularity-filter/popularity-filter";
import RecommendedFilms from "./components/recommended-films/recommended-films";
import Controls from "./components/controls/controls";

const SearchPage = () => {
  const [index, setIndex] = useState(0);
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [popularity, setPopularity] = useState("");
  const [visibility, setVisibility] = useState({
    ratingFilter: false,
    popularityFilter: false,
    filmCard: false,
  });

  const handleGenreSelectChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
    setVisibility((prevState) =>
      Object.assign(prevState, { ratingFilter: true })
    );
    setIndex(0);
  };

  const handleRatingSelectChange = (event: SelectChangeEvent) => {
    setRating(event.target.value);
    setVisibility((prevState) =>
      Object.assign(prevState, { popularityFilter: true })
    );
    setIndex(0);
  };

  const handlePopularitySelectChange = (event: SelectChangeEvent) => {
    setPopularity(event.target.value);
    setVisibility((prevState) => Object.assign(prevState, { filmCard: true }));
    setIndex(0);
  };

  const recommendedFilms = getRecommendedFilms(
    getFilmsData(),
    +genre,
    rating,
    popularity
  );

  const dislikeButtonHandler = () => {
    setIndex(index + 1);
  };

  const getRatingSelect = () => {
    if (visibility.ratingFilter) {
      return (
        <RatingFilter rating={rating} onChange={handleRatingSelectChange} />
      );
    }
    return "";
  };

  const getPopularitySelect = () => {
    if (visibility.popularityFilter) {
      return (
        <PopularityFilter
          popularity={popularity}
          onChange={handlePopularitySelectChange}
        />
      );
    }
    return "";
  };

  const filmCard = recommendedFilms[index];

  const getFilmCardTab = () => {
    if (filmCard && visibility.filmCard) {
      const {
        poster_path: poster,
        title,
        vote_average: filmRating,
        backdrop_path: background,
      } = filmCard;
      return (
        <Box display="flex" flexDirection="column" gap="20px">
          <RecommendedFilms
            poster={poster}
            title={title}
            rating={filmRating.toString()}
            background={background || ""}
          />
          <Controls
            onDislikeClick={dislikeButtonHandler}
            idLink={filmCard.id}
          />
        </Box>
      );
    }
    if (!filmCard && visibility.filmCard) {
      return "There is no such film. Change filter values";
    }
    return "";
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" gap="20px">
        <GenresFilter genre={genre} onChange={handleGenreSelectChange} />
        {getRatingSelect()}
        {getPopularitySelect()}
        {getFilmCardTab()}
      </Box>
    </Container>
  );
};

export default SearchPage;
