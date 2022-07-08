export const addIdToLocalStorageList = (id: number, key: string): void => {
  const initialState: number[] = [];

  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(initialState));
  }

  const currentList: number[] = JSON.parse(localStorage.getItem(key) || '');
  const updatedList = [...currentList, id];
  localStorage.setItem(key, JSON.stringify(updatedList));
  console.log(localStorage.getItem(key));
};

export const removeIdFromLocalStorageList = (id: number, key: string): void => {
  const currentList: number[] = JSON.parse(localStorage.getItem(key) || '');
  const updatedList = currentList.filter((item) => item !== id);
  localStorage.setItem(key, JSON.stringify(updatedList));
  console.log(localStorage.getItem(key));
};
