import styles from './styles.module.scss';
import { Movies } from '../../components/Movies/Movies';

export const Main = () => {
  return (
    <div className={styles.movies_wrapper}>
      <Movies />
    </div>
  );
};
