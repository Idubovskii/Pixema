import { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { FilterButton } from '../../../shared/ui/buttons/FilterButton/FilterButton';
import { SearchButton } from '../../../shared/ui/buttons/SearchButton/SearchButton';
import { changeThemeSelector } from '../../../store/selectors/selectors';

export const SearchBar = () => {
  const hasTheme = useSelector(changeThemeSelector);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onClick = () => {
    navigate(`/search/${searchText}`);
    setSearchText('');
  };

  return (
    <label
      className={
        hasTheme ? `${styles.search} ${styles.light}` : `${styles.search}`
      }
    >
      <input
        type="search"
        name="search"
        placeholder="Фильмы и сериалы"
        value={searchText}
        onChange={onChange}
      />
      <SearchButton
        onClick={onClick}
        className={searchText ? `${styles.button}` : `${styles.disable}`}
      />
      <FilterButton />
    </label>
  );
};
