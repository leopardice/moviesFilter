import React, { useState } from 'react';
import {
  Box, Button,
  Container, FormControl, MenuItem, Select, Stack, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { GENRES } from '../main/components/FiltersMenu/components/genresData';
import { IMovieCard, IStore } from '../../interfaces';
import {
  setRecommendedFilmPopularity,
  setRecommendedFilmRating,
  setRecommendedGenre,
} from '../../redux/rootDir/actions';
import MOVIES_DATA from '../main/components/MoviesList/moviesData';
import { FILMS_BY_POPULARITY, FILMS_BY_RATING, imgHost } from '../../utils';

const SearchPage = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const { genre, rating, popularity } = useSelector((state: IStore) => state.recommendedFilmInfo);

  const handleGenreSelectChange = (event: SelectChangeEvent) => {
    dispatch(setRecommendedGenre(event.target.value));
    setIndex(0);
  };

  const { high, low } = FILMS_BY_RATING;

  const handleRatingSelectChange = (event: SelectChangeEvent) => {
    dispatch(setRecommendedFilmRating(event.target.value));
    setIndex(0);
  };

  const { popular, unknown } = FILMS_BY_POPULARITY;

  const handlePopularitySelectChange = (event: SelectChangeEvent) => {
    dispatch(setRecommendedFilmPopularity(event.target.value));
    setIndex(0);
  };

  const getFilmByGenreId = (genreIds: number[], id: number) => genreIds.includes(id);
  const getHighRatingFilms = (filmsData: IMovieCard[]) => filmsData.filter((card) => card.vote_average > 5);
  const getLowRatingFilms = (filmsData: IMovieCard[]) => filmsData.filter((card) => card.vote_average <= 5);
  const getPopularFilms = (filmsData: IMovieCard[]) => filmsData.filter((card) => card.popularity > 100 && card.vote_count > 200);
  const getUnknownFilms = (filmsData: IMovieCard[]) => filmsData.filter((card) => card.popularity <= 100 && card.vote_count <= 200);

  const getRecommendedFilms = (genreId: string, filmRating: string, popularityType: string): IMovieCard[] => {
    const recommendedByGenre = MOVIES_DATA.filter((item) => getFilmByGenreId(item.genre_ids, Number(genreId)));
    const recommendedByRating = filmRating === high
      ? getHighRatingFilms(recommendedByGenre)
      : getLowRatingFilms(recommendedByGenre);
    const recommendedByPopularity = popularityType === popular
      ? getPopularFilms(recommendedByRating)
      : getUnknownFilms(recommendedByRating);
    return recommendedByPopularity;
  };

  const recommendedFilms = getRecommendedFilms(genre, rating, popularity);
  const filmCardToShow = recommendedFilms[index];
  const isFilmCardExist = !!filmCardToShow;
  const likeButtonLink = isFilmCardExist ? `/details/${filmCardToShow.id}` : '/search';

  const dislikeButtonHandler = () => {
    setIndex(index + 1);
  };

  return (
    <Container>
      <Typography variant="body1" component="p">Choose film genre:</Typography>
      <FormControl fullWidth>
        <Select
          onChange={handleGenreSelectChange}
          value={genre}
        >
          {GENRES.map(({ name, id }) => <MenuItem key={id} value={id.toString()}>{name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl>
        <Typography variant="body1" component="p">Choose film rating:</Typography>
        <Select
          onChange={handleRatingSelectChange}
          value={rating}
        >
          <MenuItem key={1} value={high}>{high}</MenuItem>
          <MenuItem key={2} value={low}>{low}</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Typography variant="body1" component="p">Choose film popularity:</Typography>
        <Select
          onChange={handlePopularitySelectChange}
          value={popularity}
        >
          <MenuItem key={1} value={popular}>{popular}</MenuItem>
          <MenuItem key={2} value={unknown}>{unknown}</MenuItem>
        </Select>
      </FormControl>
      {isFilmCardExist
        ? (
          <Box
            className="film-description-container"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: `url(${imgHost}${filmCardToShow.backdrop_path})`,
              backgroundPosition: '50% 0',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '30vh',
              gap: '2rem',
              padding: '0 5rem',
            }}
          >
            <Box sx={{ height: '100%', alignItems: 'center', display: 'flex' }}>
              <img
                src={`${imgHost}${filmCardToShow.poster_path}`}
                alt="movie-poster"
                className="film-poster"
                height="80%"
              />
            </Box>
            <Stack
              className="film-description"
              spacing={1}
            >
              <Typography className="film-tittle" variant="h4" component="h4" color="white">
                {filmCardToShow.title}
              </Typography>
              <Typography className="film-rating" variant="body1" component="h4" color="white">
                Рейтинг:
                {' '}
                {filmCardToShow.vote_average}
              </Typography>
            </Stack>
          </Box>
        )
        : ''}
      <Stack direction="row" justifyContent="space-between" sx={{ padding: '0 5rem' }}>
        <Link className="pages-link" to={likeButtonLink}><Button variant="contained">Like</Button></Link>
        <Button variant="contained" onClick={dislikeButtonHandler}>Dislike</Button>
      </Stack>
    </Container>
  );
};

export default SearchPage;
