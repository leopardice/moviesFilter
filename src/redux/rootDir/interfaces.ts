export interface IStore {
  movieIndex: number
  currentPage: number
  releaseYear: number
  sortingValue: string
  chosenGenres: number[]
  isLoggedIn: boolean
  isLoginModalOpen: boolean
  favoriteFilms: number[]
  watchLaterFilms: number[]
  listType: string
  recommendedFilmInfo: {genre: string, rating: string, popularity: string}
}
