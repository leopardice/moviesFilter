import React, { useState } from 'react';
import {
  Grid, Paper, Button, Typography, Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DetailsModal from './components/DetailsModal';
import AddFavoriteButton from './components/add-favorite-button';
import AddWatchLaterButton from './components/add-watch-later-button';
import useLoginModalStatus, { useAuthenticationStatus } from '../../../hooks';
import { IStore } from '../../../interfaces';
import { addFilmFavorite, removeFilmFavorite } from '../../../../redux/actions';
import { isIdInList } from '../../../utils';

interface MovieCardProps {
  rating: number;
  title: string;
  detailsText: string;
  imagePath: string;
  id: number;
}

export interface IFavoriteButton {
  onClick: (key: string)=> void;
}

const MovieCard = ({
  rating, title, detailsText, imagePath, id,
}: MovieCardProps) => {
  const [detailsTabActive, setDetailsTabActive] = useState(false);

  const detailsClickHandler = () => {
    setDetailsTabActive(!detailsTabActive);
  };

  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const favoriteFilms = useSelector((state: IStore) => state.favoriteFilms);
  const dispatch = useDispatch();

  const handleListButtonClick = (key: string) => {
    if (!isAuthenticated) {
      setLoginModalStatus(true);
      return;
    }
    if (isIdInList(id, favoriteFilms)) dispatch(removeFilmFavorite(id));
    else dispatch(addFilmFavorite(id));
  };

  return (
    <Grid item xs={6}>
      <Paper elevation={3}>
        {detailsTabActive
          ? (
            <DetailsModal onClick={detailsClickHandler} detailsText={detailsText} />
          )
          : (
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
                  />
                  <AddWatchLaterButton
                    onClick={handleListButtonClick}
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
                  <Button variant="text" onClick={detailsClickHandler}>Подробнее</Button>
                </Grid>
              </Grid>
            </Grid>
          )}
      </Paper>
    </Grid>
  );
};
export default MovieCard;
