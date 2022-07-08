import React from 'react';
import { StarBorder } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import { IFavoriteButton } from '../MovieCard';
import { LOCAL_STORAGE_KEYS } from '../../../../../../utils';

const AddFavoriteButton = ({ onClick, isFilmInList }: IFavoriteButton) => {
  const handleClick = () => { onClick(LOCAL_STORAGE_KEYS.favoriteFilmsKey); };
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
      {isFilmInList
        ? <StarIcon sx={{ width: 12 }} />
        : <StarBorder sx={{ width: 12 }} />}
    </Button>
  );
};
export default AddFavoriteButton;
