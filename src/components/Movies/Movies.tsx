import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { LazyLoaderSvg } from '../../assets/svg/LazyLoaderSvg';

import { MovieCard } from '../MovieCard/MovieCard';

export const Movies = () => {
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (
      document.documentElement.clientWidth <= 1366 &&
      document.documentElement.clientWidth > 1024
    ) {
      setLimit(8);
      setCount(8);
    } else if (
      document.documentElement.clientWidth <= 1024 &&
      document.documentElement.clientWidth > 734
    ) {
      setLimit(9);
      setCount(9);
    } else {
      setLimit(10);
      setCount(10);
    }
  }, []);

  if (movies.length === 0) {
    return <LazyLoaderSvg />;
  }
  return (
    <div
      className={
        hasTheme
          ? `${styles.movies_container} ${styles.light}`
          : `${styles.movies_container}`
      }
    >
      <h1>Новые фильмы и сериалы</h1>
      <div className={styles.movies_block}>
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            docs={item}
          />
        ))}
      </div>
      <div className={styles.movies_footer}>
        <button onClick={() => setLimit(limit + count)}>Показать ещё</button>
      </div>
    </div>
  );
};
