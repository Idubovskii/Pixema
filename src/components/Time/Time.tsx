import { type IMovie } from '~/types/movie';

import styles from './styles.module.scss';

export const Time = ({ movieLength }: IMovie) => {
  return (
    <div className={styles.time_container}>
      {movieLength && `${movieLength}min`}
    </div>
  );
};
