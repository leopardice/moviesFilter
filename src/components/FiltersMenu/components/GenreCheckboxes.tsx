import React, { SyntheticEvent } from 'react';
import { FormControlLabel, FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { addGenre, removeGenre, setMovieIndex } from '../../../../redux/actions';
import { GENRES } from './genresData';
import { IStore } from '../../../interfaces';

const GenreItem = (props: {id: number, name: string}) => {
  const dispatch = useDispatch();
  const { name, id } = props;
  const isChecked = useSelector((state: IStore) => state.chosenGenres.includes(id));
  const handleChange = (event: SyntheticEvent<Element, Event>, checked: boolean) => {
    dispatch(checked ? addGenre(id) : removeGenre(id));
    dispatch(setMovieIndex(0));
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
    {GENRES.map(({ id, name }) => (
      <GenreItem
        key={id}
        name={name}
        id={id}
      />
    ))}
  </FormGroup>
);
export default GenreCheckboxes;
