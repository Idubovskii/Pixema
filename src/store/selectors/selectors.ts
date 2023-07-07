import { type GlobalState } from '~/store/store';

export const toggleBurgerSelector = (state: GlobalState) =>
  state.toggleBurger.isOpen;
export const toggleFilterSelector = (state: GlobalState) =>
  state.toggleFilter.isOpen;
export const changeThemeSelector = (state: GlobalState) =>
  state.changeTheme.hasThemeColor;
export const authSelector = (state: GlobalState) => state.auth;
export const userSelector = (state: GlobalState) => state.auth.user;
export const registerSelector = (state: GlobalState) => state.register;
export const moviesSelector = (state: GlobalState) => state.movies.docs;
export const selectedMovieSelector = (state: GlobalState) =>
  state.selectedMovie.movie;
export const selectedPersonSelector = (state: GlobalState) =>
  state.selectedPerson.person;
export const favoritesMoviesSelector = (state: GlobalState) =>
  state.favoritesMovies.favoritesMovies;
export const backogroundMovieSelector = (state: GlobalState) =>
  state.backgroundMovie.movie;
export const filtermovieSelector = (state: GlobalState) => state.filter;
