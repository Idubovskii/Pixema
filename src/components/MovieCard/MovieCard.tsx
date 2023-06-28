import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { SmallFavoriteButton } from '../../shared/ui/buttons/SmallFavoriteButton/SmallFavoriteButton';
import {
  changeThemeSelector,
  favoritesMoviesSelector
} from '../../store/selectors/selectors';
import { type IMovieProperties } from '../../types/movie';
import { Genres } from '../Genres/Genres';
import { Rating } from '../Rating/Rating';

export const MovieCard = ({ docs }: IMovieProperties) => {
  const hasTheme = useSelector(changeThemeSelector);
  const favoritemovies = useSelector(favoritesMoviesSelector);
  const isFavoritePost = (favoriteMoviesId: number | undefined) => {
    return favoritemovies.find((movie) => movie.id === favoriteMoviesId);
  };

  return (
    <div
      className={
        hasTheme
          ? `${styles.movie_card} ${styles.light}`
          : `${styles.movie_card}`
      }
    >
      <div className={styles.movie_makers}>
        <Rating rating={docs?.rating} />
        {docs && isFavoritePost(docs?.id) && (
          <SmallFavoriteButton movie={docs} />
        )}
      </div>
      <Link to={`/film/${docs?.id ?? ''}`}>
        <div
          className={styles.movie_poster}
          style={{ backgroundImage: `url(${docs?.poster?.url ?? ''})` }}
        ></div>
        <div className={styles.movie_description}>
          <h2>{docs?.name}</h2>
          <div className={styles.movie_footer}>
            <Genres genres={docs?.genres} />
          </div>
        </div>
      </Link>
    </div>
  );
};
