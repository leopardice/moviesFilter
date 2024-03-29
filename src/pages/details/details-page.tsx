import React from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import getFilteredList from "../main/components/MoviesList/filterList";
import { IMovieCard } from "../../shared/api/api";

export const imgHost = "https://image.tmdb.org/t/p/w500/";

const DetailsPage = () => {
  const params = useParams();
  const { filmId } = params;
  const cardData: IMovieCard | undefined = getFilteredList().find(
    (card) => card.id === Number(filmId)
  );

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("lg"));
  const imgPadding = tablet ? "1rem 1rem" : "5rem 5rem";

  return (
    <Box
      className="details-page"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className="film-description-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgHost}${cardData?.backdrop_path})`,
          backgroundPosition: "50% 0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          gap: "2rem",
          padding: imgPadding,
        }}
      >
        {tablet ? (
          false
        ) : (
          <img
            src={`${imgHost}${cardData?.poster_path}`}
            alt="movie-poster"
            className="film-poster"
            width="30%"
          />
        )}
        <Stack className="film-description" spacing={1}>
          <Typography
            className="film-tittle"
            variant="h4"
            component="h4"
            color="white"
          >
            {cardData?.title}
          </Typography>
          <Typography
            className="film-rating"
            variant="body1"
            component="h4"
            color="white"
          >
            Рейтинг: {cardData?.vote_average}
          </Typography>
          <Typography
            className="film-rating"
            variant="body1"
            component="h4"
            color="white"
          >
            {cardData?.overview}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Container sx={{ marginTop: "1rem" }}>
          <Stack
            className="film-info"
            width="80%"
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="40%"
            >
              <Typography variant="body1" component="p">
                Детали
              </Typography>
              <Typography variant="body1" component="p">
                Видео
              </Typography>
              <Typography variant="body1" component="p">
                Актеры
              </Typography>
            </Stack>
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="60%"
            >
              <Typography variant="body1" component="p">
                Статус
              </Typography>
              <Typography variant="body1" component="p">
                Released
              </Typography>
            </Stack>
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="60%"
            >
              <Typography variant="body1" component="p">
                Дата выхода
              </Typography>
              <Typography variant="body1" component="p">
                {cardData?.release_date}
              </Typography>
            </Stack>
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="60%"
            >
              <Typography variant="body1" component="p">
                Продолжительность
              </Typography>
              <Typography variant="body1" component="p">
                117 минут
              </Typography>
            </Stack>
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="60%"
            >
              <Typography variant="body1" component="p">
                Язык оригинала
              </Typography>
              <Typography variant="body1" component="p">
                {cardData?.original_language}
              </Typography>
            </Stack>
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="60%"
            >
              <Typography variant="body1" component="p">
                Страна
              </Typography>
              <Typography variant="body1" component="p">
                Japan
              </Typography>
            </Stack>
            <Stack
              className="film-info-line"
              direction="row"
              justifyContent="space-between"
              width="60%"
            >
              <Typography variant="body1" component="p">
                Бюджет
              </Typography>
              <Typography variant="body1" component="p">
                1580000
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default DetailsPage;
