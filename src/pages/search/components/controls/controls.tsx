import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

interface IControlsProp {
  onDislikeClick: () => void;
  idLink: number;
}

const Controls = ({ onDislikeClick, idLink }: IControlsProp) => {
  const likeButtonLink = idLink ? `/details/${idLink}` : "";
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ padding: "0 5rem" }}
    >
      <Link className="pages-link" to={likeButtonLink}>
        <Button variant="contained">Like</Button>
      </Link>
      <Button variant="contained" onClick={onDislikeClick}>
        Dislike
      </Button>
    </Stack>
  );
};

export default Controls;
