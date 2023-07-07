import { useDispatch } from 'react-redux';

import { CrossSvg } from '~/assets/svg/CrossSvg';
import { toggleFilterAction } from '~/store/reducers/toggleFilter/reducer';

import styles from './styles.module.scss';

export const CloseButton = () => {
  const dispatch = useDispatch();
  const toggleFilter = () => {
    dispatch(toggleFilterAction());
  };
  return (
    <button
      onClick={toggleFilter}
      className={styles.close_button}
    >
      <CrossSvg />
    </button>
  );
};
