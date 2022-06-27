import React, { useState } from 'react';
import {
  Grid, Paper, Button, Typography, Box,
} from '@mui/material';
import { StarBorder, BookmarkBorderOutlined } from '@mui/icons-material';
import DetailsModal from './DetailsModal';

interface MovieCardProps {
  rating: number;
  title: string;
  detailsText: string;
  imagePath: string;
}

const MovieCard = ({
  rating, title, detailsText, imagePath,
}: MovieCardProps) => {
  const [detailsTabActive, setDetailsTabActive] = useState(false);

  const detailsClickHandler = () => {
    setDetailsTabActive(!detailsTabActive);
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
                  <StarBorder sx={{ width: 12 }} />
                  <BookmarkBorderOutlined sx={{ width: 12 }} />
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
