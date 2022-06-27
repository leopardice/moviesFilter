import React from 'react';
import { FormControlLabel, FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const GENRES = [
  {
    id: 28,
    name: 'боевик',
  },
  {
    id: 12,
    name: 'приключения',
  },
  {
    id: 16,
    name: 'мультфильм',
  },
  {
    id: 35,
    name: 'комедия',
  },
  {
    id: 80,
    name: 'криминал',
  },
  {
    id: 99,
    name: 'документальный',
  },
  {
    id: 18,
    name: 'драма',
  },
  {
    id: 10751,
    name: 'семейный',
  },
  {
    id: 14,
    name: 'фэнтези',
  },
  {
    id: 36,
    name: 'история',
  },
  {
    id: 27,
    name: 'ужасы',
  },
  {
    id: 10402,
    name: 'музыка',
  },
  {
    id: 9648,
    name: 'детектив',
  },
  {
    id: 10749,
    name: 'мелодрама',
  },
  {
    id: 878,
    name: 'фантастика',
  },
  {
    id: 10770,
    name: 'телевизионный фильм',
  },
  {
    id: 53,
    name: 'триллер',
  },
  {
    id: 10752,
    name: 'военный',
  },
  {
    id: 37,
    name: 'вестерн',
  },
];

const GenreCheckboxes = () => (
  <FormGroup>
    {GENRES.map((item) => (
      <FormControlLabel
        control={<Checkbox />}
        key={item.id}
        label={item.name}
      />
    ))}
  </FormGroup>
);

export default GenreCheckboxes;
