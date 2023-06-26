import styles from './styles.module.scss';
import { SearchIcoSvg } from '../../../assets/svg/SearchIcoSvg';

interface ISearchButtonProperties {
  className: string;
  onClick: () => void;
}

export const SearchButton = (properties: ISearchButtonProperties) => {
  const { className, onClick } = properties;
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.search_button}`}
    >
      <SearchIcoSvg />
    </button>
  );
};
