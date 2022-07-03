export const LOCAL_STORAGE_KEYS = {
  favoriteFilmsKey: 'favoriteFilms',
  watchLaterKey: 'watchLater',
};

export const isIdInList = (id: number, list: number[]) : boolean => list.includes(id);
