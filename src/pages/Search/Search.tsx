import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { MovieCard } from '~/components/MovieCard/MovieCard';
import { movieTypes } from '~/constants/constants';
import { loadMoviesBySearchAsyncAction } from '~/store/reducers/movies/actions';
import { moviesSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

export const Search = () => {
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(10);
  const [movieType, setMovieType] = useState('');
  const [hasActiveUl, setActiveUl] = useState(false);
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
  const { name } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);
  const query = `search=${name ?? ''}&field=name${
    movieType === '' ? '' : `&type=${movieType}`
  }`;

  useEffect(() => {
    dispatch(loadMoviesBySearchAsyncAction(limit, query));
  }, [dispatch, limit, query]);

  return (
    <div className={styles.movies_container}>
      <div className={styles.movies_buttons}>
        <ul className={hasActiveUl ? `${styles.active_ul}` : ''}>
          <label
            onClick={() => {
              setActiveUl(!hasActiveUl);
            }}
          >
            Выбрать жанр
          </label>
          {movieTypes.map((element) => (
            <li
              className={
                movieType === element.value
                  ? `${styles.ulgenre} ${styles.active}`
                  : `${styles.ulgenre}`
              }
              key={element.label}
              onClick={() => setMovieType(element.value)}
            >
              {element.label}
            </li>
          ))}
        </ul>
      </div>
      {movies.length === 0 ? (
        <h1 className={styles.notfound}>Нет фильмов по вашему запросу</h1>
      ) : (
        <div className={styles.movies_block}>
          {movies.map((item) => (
            <MovieCard
              key={item.id}
              docs={item}
            />
          ))}
        </div>
      )}
      <div className={styles.movies_footer}>
        {movies.length >= 8 && (
          <button onClick={() => setLimit(limit + count)}>Показать ещё</button>
        )}
      </div>
    </div>
  );
};
