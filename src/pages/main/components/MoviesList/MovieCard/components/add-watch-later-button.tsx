import React, { useEffect, useState } from "react";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button } from "@mui/material";
import { IFavoriteButton } from "../MovieCard";
import { isIdInList, LOCAL_STORAGE_KEYS } from "../../../../../../shared/utils";
import useLoginModalStatus, {
  useAppDispatch,
  useAppSelector,
  useAuthenticationStatus,
} from "../../../../../../shared/hooks";
import {
  addWatchLaterFilm,
  FILM_LIST_TYPES,
  removeWatchLaterFilm,
} from "../../../../../../shared/features/film-list-type";

const AddWatchLaterButton = ({ id }: IFavoriteButton) => {
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const dispatch = useAppDispatch();

  const watchLaterFilmsIds = useAppSelector(
    (state) => state.listType.watch_later_films_ids
  );

  const isFilmInWatchLater = isIdInList(id, watchLaterFilmsIds);

  const handleWatchLaterClick = () => {
    if (!isAuthenticated) {
      setLoginModalStatus(true);
      return;
    }

    if (isFilmInWatchLater) {
      dispatch(removeWatchLaterFilm(id));
    } else {
      dispatch(addWatchLaterFilm(id));
    }
  };

  return (
    <Button
      onClick={handleWatchLaterClick}
      sx={{
        padding: 0,
        minWidth: 12,
        color: "black",
      }}
      aria-label="add to watch later"
    >
      {isFilmInWatchLater ? (
        <BookmarkIcon sx={{ width: 12 }} />
      ) : (
        <BookmarkBorderOutlined sx={{ width: 12 }} />
      )}
    </Button>
  );
};
export default AddWatchLaterButton;
