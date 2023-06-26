import styles from './styles.module.scss';
import { type IMovie } from '../../types/movie';

export const Time = ({ movieLength }: IMovie) => {
  return (
    <div className={styles.time_container}>
      {movieLength && `${movieLength}min`}
    </div>
  );
};
