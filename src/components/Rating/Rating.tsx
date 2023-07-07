import { type IMovie } from '~/types/movie';

import styles from './styles.module.scss';

export const Rating = ({ rating }: IMovie) => {
  const rate = [...(rating?.kp?.toString() || '')];
  return (
    <div
      className={`${styles.rating} ${
        (rating?.kp !== undefined && rating?.kp >= 7
          ? `${styles.rating_green}`
          : '') ||
        (rating?.kp !== undefined && rating?.kp <= 5
          ? `${styles.rating_red}`
          : '')
      }`}
    >
      {rating?.kp !== undefined &&
        rate[0] + (rate[1] || '.') + (rate[2] || '0')}
    </div>
  );
};
