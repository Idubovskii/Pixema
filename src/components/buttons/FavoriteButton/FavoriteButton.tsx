import styles from './styles.module.scss';
import { CompleteSvg } from '../../../assets/svg/CompleteSvg';
import { FavoritesSvg } from '../../../assets/svg/FavoritesSvg';
import { type IMovie } from '../../../types/movie';

export const FavoriteButton = (properties: { movie: IMovie }) => {
  const { movie } = properties;
  const favoritemovies = useSelector(favoritesMoviesSelector);
  const isFavoritePost = (favoriteMoviesId: number | undefined) => {
    return favoritemovies.find((movie) => movie.id === favoriteMoviesId);
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
