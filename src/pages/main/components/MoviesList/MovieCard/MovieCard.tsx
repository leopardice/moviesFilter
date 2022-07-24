import React, { useEffect, useState } from "react";
import { Grid, Paper, Button, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddFavoriteButton from "./components/add-favorite-button";
import AddWatchLaterButton from "./components/add-watch-later-button";
import useLoginModalStatus, {
  useAppDispatch,
  useAppSelector,
  useAuthenticationStatus,
} from "../../../../../shared/hooks";
import { IStore } from "../../../../../redux/rootDir/interfaces";
import {
  addFilmFavorite,
  addFilmWatchLater,
  removeFilmFavorite,
  removeFilmWatchLater,
  setFilmFavorite,
  setWatchLaterFilms,
} from "../../../../../redux/rootDir/actions";
import { isIdInList, LOCAL_STORAGE_KEYS } from "../../../../../shared/utils";
import DetailsPage from "../../../../details/details-page";
import {
  addWatchLaterFilm,
  FILM_LIST_TYPES,
  removeWatchLaterFilm,
} from "../../../../../shared/features/film-list-type";

interface MovieCardProps {
  rating: number;
  title: string;
  detailsText: string;
  imagePath: string;
  id: number;
}

export interface IFavoriteButton {
  id: number;
}

const MovieCard = ({ rating, title, imagePath, id }: MovieCardProps) => (
  // useEffect(() => {
  //   const favoriteFilms = localStorage.getItem(
  //     LOCAL_STORAGE_KEYS.favoriteFilmsKey
  //   );
  //   if (!favoriteFilms)
  //     localStorage.setItem(LOCAL_STORAGE_KEYS.favoriteFilmsKey, "[]");
  //   dispatch(
  //     setFilmFavorite(
  //       JSON.parse(
  //         localStorage.getItem(LOCAL_STORAGE_KEYS.favoriteFilmsKey) || ""
  //       )
  //     )
  //   );
  //   const watchLaterFilms = localStorage.getItem(
  //     LOCAL_STORAGE_KEYS.watchLaterKey
  //   );
  //   if (!watchLaterFilms)
  //     localStorage.setItem(LOCAL_STORAGE_KEYS.watchLaterKey, "[]");
  //   dispatch(
  //     setWatchLaterFilms(
  //       JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.watchLaterKey) || "")
  //     )
  //   );
  // }, []);

  <Grid item xs={6}>
    <Paper elevation={3}>
      <Grid container className="main-card">
        <Grid item xs={6}>
          <img src={imagePath} alt="movie-poster" className="img" />
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ padding: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" component="p">
              Рейтинг фильма:
              {rating}
            </Typography>
            <AddFavoriteButton id={id} />
            <AddWatchLaterButton id={id} />
          </Box>
          <Grid item>
            <Typography variant="h6" component="h6">
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              borderTop: "1px solid",
              width: "100%",
            }}
          >
            <Button className="details-button" sx={{ color: "black" }}>
              <Link className="pages-link" to={`/details/${id}`}>
                Подробнее
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);
export default MovieCard;
