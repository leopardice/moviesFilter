import React, { useEffect } from "react";
import { StarBorder } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import { IFavoriteButton } from "../MovieCard";
import { isIdInList, LOCAL_STORAGE_KEYS } from "../../../../../../shared/utils";
import useLoginModalStatus, {
  useAppDispatch,
  useAppSelector,
  useAuthenticationStatus,
} from "../../../../../../shared/hooks";
import {
  addFavoriteFilm,
  addWatchLaterFilm,
  FILM_LIST_TYPES,
  removeFavoriteFilm,
  removeWatchLaterFilm,
} from "../../../../../../shared/features/film-list-type";

const AddFavoriteButton = ({ id }: IFavoriteButton) => {
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  const [isAuthenticated, setAuthenticationStatus] = useAuthenticationStatus();

  const dispatch = useAppDispatch();

  const favoriteFilmsIds = useAppSelector(
    (state) => state.listType.favorite_films_ids
  );

  const isFilmInFavorite = isIdInList(id, favoriteFilmsIds);

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      setLoginModalStatus(true);
      return;
    }

    if (isFilmInFavorite) {
      dispatch(removeFavoriteFilm(id));
    } else {
      dispatch(addFavoriteFilm(id));
    }
  };

  useEffect(() => {
    localStorage.setItem(
      FILM_LIST_TYPES.favorite_films,
      JSON.stringify(favoriteFilmsIds)
    );
  }, [favoriteFilmsIds]);

  return (
    <Button
      onClick={handleFavoriteClick}
      sx={{
        padding: 0,
        minWidth: 12,
        color: "black",
      }}
      aria-label="add to favorites"
    >
      {isFilmInFavorite ? (
        <StarIcon sx={{ width: 12 }} />
      ) : (
        <StarBorder sx={{ width: 12 }} />
      )}
    </Button>
  );
};
export default AddFavoriteButton;
