import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { CrossSvg } from '../../../../assets/svg/CrossSvg';
import { toggleFilterAction } from '../../../../store/reducers/toggleFilter/reducer';

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
