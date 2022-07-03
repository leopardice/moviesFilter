import React from 'react';
import { BookmarkBorderOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { IFavoriteButton } from '../MovieCard';

const watchLaterKey = 'watchLater';

const AddWatchLaterButton = ({ onClick }: IFavoriteButton) => {
  const handleClick = () => { onClick(watchLaterKey); };

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
      <BookmarkBorderOutlined sx={{ width: 12 }} />
    </Button>
  );
};
export default AddWatchLaterButton;
