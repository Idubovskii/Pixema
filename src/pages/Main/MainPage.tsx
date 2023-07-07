import { Movies } from '~/components/Movies/Movies';

import styles from './styles.module.scss';

export const Main = () => {
  return (
    <div className={styles.movies_wrapper}>
      <Movies />
    </div>
  );
};
