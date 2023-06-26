import styles from './styles.module.scss';
import { type IMovie } from '../../types/movie';

export const AgeRating = ({ ageRating }: IMovie) => {
  return (
    <div className={styles.age_container}>{ageRating && `${ageRating}+`}</div>
  );
};
