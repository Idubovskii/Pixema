import { useSelector } from 'react-redux';

import { MovieCard } from '~/components/MovieCard/MovieCard';
import {
  changeThemeSelector,
  favoritesMoviesSelector
} from '~/store/selectors/selectors';

import styles from './styles.module.scss';

export const Favorites = () => {
  const favoritesMovies = useSelector(favoritesMoviesSelector);
  const hasTheme = useSelector(changeThemeSelector);
  return (
    <div
      className={
        hasTheme
          ? `${styles.movies_container} ${styles.light}`
          : `${styles.movies_container}`
      }
    >
      <h1>Избранное</h1>
      {favoritesMovies.length > 0 ? (
        <div className={styles.movies_block}>
          {favoritesMovies.map((item) => (
            <MovieCard
              key={item.id}
              docs={item}
            />
          ))}
        </div>
      ) : (
        <div className={styles.favorites_null}>
          <h2>Список избранного пуст</h2>
        </div>
      )}
    </div>
  );
};
