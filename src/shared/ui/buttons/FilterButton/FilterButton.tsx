import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { FilterSvg } from '../../../../assets/svg/FilterSvg';
import { toggleFilterAction } from '../../../../store/reducers/toggleFilter/reducer';

export const FilterButton = () => {
  const dispatch = useDispatch();
  const toggleFilter = () => {
    dispatch(toggleFilterAction());
  };

  return (
    <button
      onClick={toggleFilter}
      className={styles.filter_button}
    >
      <FilterSvg />
    </button>
  );
};
