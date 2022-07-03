import React from 'react';
import { StarBorder } from '@mui/icons-material';
import { Button } from '@mui/material';
import { IFavoriteButton } from '../MovieCard';

const favoriteFilmsKey = 'favoriteFilms';

const AddFavoriteButton = ({ onClick }: IFavoriteButton) => {
  const handleClick = () => { onClick(favoriteFilmsKey); };
  return (
    <Button
      onClick={handleClick}
      sx={{
        padding: 0,
        minWidth: 12,
        color: 'black',
      }}
      aria-label="add to favorites"
    >
      <StarBorder sx={{ width: 12 }} />
    </Button>
  );
};
export default AddFavoriteButton;
