import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { type IMoviePerson } from '../../../../types/movie';

interface PersonTabProperties {
  item: IMoviePerson;
}

export const PersonTab = ({ item }: PersonTabProperties) => {
  const { name, id, photo, description } = item;

  return (
    <Link
      to={`/name/${id}`}
      className={styles.person}
    >
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className={styles.person_photo}
      ></div>
      <div className={styles.person_description}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};
