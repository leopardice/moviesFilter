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
  <Box display="block">
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
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" component="p" fontSize="18px">
              {`Rating: ${rating}`}
            </Typography>
            <div>
              <AddFavoriteButton id={id} />
              <AddWatchLaterButton id={id} />
            </div>
          </Box>
          <Grid item width="100%" textAlign="center">
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
            <Button
              className="details-button"
              sx={{ color: "black", width: "100%", textAlign: "center" }}
            >
              <Link className="pages-link" to={`/details/${id}`}>
                Details
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);
export default MovieCard;
