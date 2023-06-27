import { combineReducers } from 'redux';

import { authReducer } from './reducers/auth/reducer';
import { backgroundMovieReducer } from './reducers/backgroundMovie/reducer';
import { favoriteReducer } from './reducers/favorites/reducer';
import { filterReducer } from './reducers/filter/reducer';
import { moviesListReducer } from './reducers/movies/reducer';
import { registerReducer } from './reducers/register/reducer';
import { resetReducer } from './reducers/reset/reducer';
import { selectedMovieReducer } from './reducers/selectedMovie/reducer';
import { selectedPersonReducer } from './reducers/selectedPerson/reducer';
import { themeReducer } from './reducers/theme/reducer';
import { burgerMenuReducer } from './reducers/toggleBurger/reducer';
import { toggleFilterReducer } from './reducers/toggleFilter/reducer';

export const rootReducer = combineReducers({
  toggleBurger: burgerMenuReducer,
  changeTheme: themeReducer,
  register: registerReducer,
  auth: authReducer,
  reset: resetReducer,
  movies: moviesListReducer,
  selectedMovie: selectedMovieReducer,
  selectedPerson: selectedPersonReducer,
  favoritesMovies: favoriteReducer,
  toggleFilter: toggleFilterReducer,
  backgroundMovie: backgroundMovieReducer,
  filter: filterReducer
});
