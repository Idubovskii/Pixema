import styles from './styles.module.scss';
import { FilterSvg } from '../../../assets/svg/FilterSvg';

export const FilterButton = () => {
  return (
    <button
      onClick={toggleFilter}
      className={styles.filter_button}
    >
      <FilterSvg />
    </button>
  );
};
