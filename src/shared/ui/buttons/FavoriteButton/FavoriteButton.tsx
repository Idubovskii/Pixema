import { useDispatch, useSelector } from 'react-redux';

import { CompleteSvg } from '~/assets/svg/CompleteSvg';
import { FavoritesSvg } from '~/assets/svg/FavoritesSvg';
import {
  addToFavoritesPostsAction,
  deleteFromFavoritesPostsAction
} from '~/store/reducers/favorites/actions';
import { favoritesMoviesSelector } from '~/store/selectors/selectors';
import { type IMovie } from '~/types/movie';

import styles from './styles.module.scss';

export const FavoriteButton = (properties: { movie: IMovie }) => {
  const { movie } = properties;
  const dispatch = useDispatch();
  const favoritemovies = useSelector(favoritesMoviesSelector);
  const isFavoritePost = (favoriteMoviesId: number | undefined) => {
    return favoritemovies.find((movie) => movie.id === favoriteMoviesId);
  };
  const toggleFavoritesPosts = (movie: IMovie) => {
    if (isFavoritePost(movie.id)) {
      dispatch(deleteFromFavoritesPostsAction(movie.id));
    } else {
      dispatch(addToFavoritesPostsAction(movie));
    }
  };

  return (
    <button
      onClick={() => toggleFavoritesPosts(movie)}
      className={
        isFavoritePost(movie.id)
          ? `${styles.favbutton} ${styles.active}`
          : `${styles.favbutton}`
      }
    >
      {isFavoritePost(movie.id) ? <CompleteSvg /> : <FavoritesSvg />}
      Буду смотреть
    </button>
  );
};
