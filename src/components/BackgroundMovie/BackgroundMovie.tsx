import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { todayDate } from '../../shared/helpers/todayDate';
import { loadBackgroundMovieAsyncAction } from '../../store/reducers/backgroundMovie/actions';
import { backogroundMovieSelector } from '../../store/selectors/selectors';
import { AgeRating } from '../AgeRating/AgeRating';
import { Genres } from '../Genres/Genres';
import { Rating } from '../Rating/Rating';

export const BackgroundMovie = () => {
  const dispatch = useDispatch();
  const movie = useSelector(backogroundMovieSelector);
  const [oldDate, setOldDate] = useState(
    localStorage.getItem('oldDate') || `${todayDate() - 1}`
  );
  useEffect(() => {
    if (oldDate !== `${todayDate()}`) {
      dispatch(loadBackgroundMovieAsyncAction());
      setOldDate(`${todayDate()}`);
    }
    localStorage.setItem('oldDate', oldDate);
  }, [dispatch, oldDate]);

  return (
    <>
      <div
        className={styles.background_image_container}
        style={{
          backgroundImage:
            movie.backdrop && movie.backdrop.url
              ? `url(${movie.backdrop.url})`
              : movie.poster && movie.poster.url
              ? `url(${movie.poster.url})`
              : undefined
        }}
      >
        <div className={styles.container_container}></div>
      </div>
      <div className={styles.background_info}>
        <h1>{movie.name}</h1>
        <div className={styles.background_description_block}>
          <Rating rating={movie.rating} />
          <div className={styles.year}>{movie.year}</div>
          <Genres genres={movie.genres} />
          <div className={styles.countries}>{movie.countries?.[0].name}</div>
          <AgeRating ageRating={movie.ageRating} />
        </div>
        <div className={styles.background_description}>{movie.description}</div>
        <div className={styles.background_buttons}>
          {movie.id && <Link to={`/film/${movie.id}`}>Подробнее</Link>}
        </div>
      </div>
    </>
  );
};
