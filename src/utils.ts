export const LOCAL_STORAGE_KEYS = {
  favoriteFilmsKey: 'favoriteFilms',
  watchLaterKey: 'watchLater',
};

export const FILMS_BY_RATING = {
  high: 'high',
  low: 'low',
};

export const FILMS_BY_POPULARITY = {
  popular: 'popular',
  unknown: 'unknown',
};

export const imgHost = 'https://image.tmdb.org/t/p/w500/';

export const isIdInList = (id: number, list: number[]) : boolean => list.includes(id);
