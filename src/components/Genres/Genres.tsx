import { type IMovie } from '~/types/movie';

import styles from './styles.module.scss';

export const Genres = ({ genres }: IMovie) => {
  return (
    <div className={styles.genres}>
      {genres?.map((item) => (
        <p key={item.name}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </p>
      ))}
    </div>
  );
};
