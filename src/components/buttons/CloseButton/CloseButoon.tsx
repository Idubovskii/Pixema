import styles from './styles.module.scss';
import { CrossSvg } from '../../../assets/svg/CrossSvg';

export const CloseButton = () => {
  return (
    <button
      onClick={toggleFilter}
      className={styles.close_button}
    >
      <CrossSvg />
    </button>
  );
};
