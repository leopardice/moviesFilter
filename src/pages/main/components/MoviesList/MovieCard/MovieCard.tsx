import React, { useState } from 'react';
import {
  Grid, Paper, Button, Typography, Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddFavoriteButton from './components/add-favorite-button';
import AddWatchLaterButton from './components/add-watch-later-button';
import useLoginModalStatus, { useAuthenticationStatus } from '../../../../../hooks';
import { IStore } from '../../../../../interfaces';
import {
  addFilmFavorite,
  addFilmWatchLater,
  removeFilmFavorite,
  removeFilmWatchLater,
} from '../../../../../redux/rootDir/actions';
import { isIdInList, LOCAL_STORAGE_KEYS } from '../../../../../utils';
import DetailsPage from '../../../../details/details-page';

interface MovieCardProps {
  rating: number;
  title: string;
  detailsText: string;
  imagePath: string;
  id: number;
}

export interface IFavoriteButton {
  onClick: (key: string)=> void;
  isFilmInList: boolean
}

const MovieCard = ({
  rating, title, imagePath, id, detailsText,
}: MovieCardProps) => {
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const favoriteFilms = useSelector((state: IStore) => state.favoriteFilms);
  const watchLaterFilms = useSelector((state: IStore) => state.watchLaterFilms);

  const dispatch = useDispatch();

  const isFilmInFavorite = isIdInList(id, favoriteFilms);
  const isFilmInWatchLater = isIdInList(id, watchLaterFilms);

  const handleListButtonClick = (key: string) => {
    if (!isAuthenticated) {
      setLoginModalStatus(true);
      return;
    }
    switch (key) {
      case LOCAL_STORAGE_KEYS.favoriteFilmsKey:
        if (isFilmInFavorite) dispatch(removeFilmFavorite(id));
        else dispatch(addFilmFavorite(id));
        break;
      case LOCAL_STORAGE_KEYS.watchLaterKey:
        if (isFilmInWatchLater) dispatch(removeFilmWatchLater(id));
        else dispatch(addFilmWatchLater(id));
        break;
      default:
    }
  };

  return (
    <Grid item xs={6}>
      <Paper elevation={3}>
        <Grid container className="main-card">
          <Grid item xs={6}>
            <img
              src={imagePath}
              alt="movie-poster"
              className="img"
            />
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
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            >
              <Typography variant="body2" component="p">
                Рейтинг фильма:
                {rating}
              </Typography>
              <AddFavoriteButton
                onClick={handleListButtonClick}
                isFilmInList={isFilmInFavorite}
              />
              <AddWatchLaterButton
                onClick={handleListButtonClick}
                isFilmInList={isFilmInWatchLater}
              />
            </Box>
            <Grid item>
              <Typography variant="h6" component="h6">{title}</Typography>
            </Grid>
            <Grid
              item
              sx={{
                borderTop: '1px solid',
                width: '100%',
              }}
            >
              <Button className="details-button" sx={{ color: 'black' }}><Link className="pages-link" to={`/details/${id}`}>Подробнее</Link></Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default MovieCard;
