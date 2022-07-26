import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { imgHost } from "../../../details/details-page";

interface IRecommendedFilmsProp {
  poster: string;
  title: string;
  rating: string;
  background: string;
}

const RecommendedFilms = ({
  background,
  poster,
  title,
  rating,
}: IRecommendedFilmsProp) => (
  <Box
    className="film-description-container"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${imgHost}${background})`,
      backgroundPosition: "50% 0",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "30vh",
      gap: "2rem",
      padding: "0 5rem",
    }}
  >
    <Box sx={{ height: "100%", alignItems: "center", display: "flex" }}>
      <img
        src={`${imgHost}${poster}`}
        alt="movie-poster"
        className="film-poster"
        height="80%"
      />
    </Box>
    <Stack className="film-description" spacing={1}>
      <Typography
        className="film-tittle"
        variant="h4"
        component="h4"
        color="white"
      >
        {title}
      </Typography>
      <Typography
        className="film-rating"
        variant="body1"
        component="h4"
        color="white"
      >
        Рейтинг:
        {rating}
      </Typography>
    </Stack>
  </Box>
);

export default RecommendedFilms;
