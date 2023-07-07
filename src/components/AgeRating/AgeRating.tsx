import { type IMovie } from '~/types/movie';

import styles from './styles.module.scss';

export const AgeRating = ({ ageRating }: IMovie) => {
  return (
    <div className={styles.age_container}>{ageRating && `${ageRating}+`}</div>
  );
};
