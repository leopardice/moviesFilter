import React, { SyntheticEvent } from "react";
import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  addGenre,
  removeGenre,
  setMovieIndex,
} from "../../../../../redux/rootDir/actions";
import { GENRES } from "./genresData";
import { IStore } from "../../../../../redux/rootDir/interfaces";
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks";
import {
  addChosenGenre,
  removeChosenGenre,
} from "../../../../../shared/features/filter-values";
import { resetPage } from "../../../../../shared/features/current-page";
import { getGenresData } from "../../../../../shared/api/api";

const GenreItem = (props: { id: number; name: string }) => {
  const dispatch = useAppDispatch();
  const { name, id } = props;
  const isChecked = useAppSelector((state) =>
    state.filterValues.chosenGenres.includes(id)
  );

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    dispatch(checked ? addChosenGenre(id) : removeChosenGenre(id));
    dispatch(resetPage());
  };

  return (
    <FormControlLabel
      checked={isChecked}
      control={<Checkbox />}
      key={id}
      label={name}
      onChange={handleChange}
    />
  );
};

const GenreCheckboxes = () => (
  <FormGroup>
    {getGenresData().map(({ id, name }) => (
      <GenreItem key={id} name={name} id={id} />
    ))}
  </FormGroup>
);
export default GenreCheckboxes;
