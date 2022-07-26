import React from "react";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button } from "@mui/material";
import isIdInList from "./utils";
import useLoginModalStatus, {
  useAppDispatch,
  useAppSelector,
  useAuthenticationStatus,
} from "../../../../../../shared/hooks";
import {
  addWatchLaterFilm,
  removeWatchLaterFilm,
} from "../../../../../../shared/features/film-list-type";

interface IButtonProps {
  id: number;
}

const AddWatchLaterButton = ({ id }: IButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModalOpen, setLoginModalStatus] = useLoginModalStatus();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
