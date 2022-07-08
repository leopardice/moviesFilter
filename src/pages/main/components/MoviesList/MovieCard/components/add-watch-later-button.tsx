import React from 'react';
import { BookmarkBorderOutlined } from '@mui/icons-material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Button } from '@mui/material';
import { IFavoriteButton } from '../MovieCard';
import { LOCAL_STORAGE_KEYS } from '../../../../../../utils';

const AddWatchLaterButton = ({ onClick, isFilmInList }: IFavoriteButton) => {
  const handleClick = () => { onClick(LOCAL_STORAGE_KEYS.watchLaterKey); };

  return (
    <Button
      onClick={handleClick}
      sx={{
        padding: 0,
        minWidth: 12,
        color: 'black',
      }}
      aria-label="add to watch later"
    >
      {isFilmInList
        ? <BookmarkIcon sx={{ width: 12 }} />
        : <BookmarkBorderOutlined sx={{ width: 12 }} />}
    </Button>
  );
};
export default AddWatchLaterButton;
