import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddFavoriteButton from "./components/add-favorite-button";
import AddWatchLaterButton from "./components/add-watch-later-button";

interface MovieCardProps {
  rating: number;
  title: string;
  imagePath: string;
  id: number;
}

const MovieCard = ({ rating, title, imagePath, id }: MovieCardProps) => (
  <Grid item xs={12} sm={6}>
    <Paper elevation={3}>
      <Grid container className="main-card">
        <Grid item width="50%">
          <img src={imagePath} alt="movie-poster" className="img" />
        </Grid>
        <Grid
          container
          item
          width="50%"
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
              Rating:
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
                Details
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);
export default MovieCard;
