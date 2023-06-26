import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { FilterButton } from '../../buttons/FilterButton/FilterButton';
import { SearchButton } from '../../buttons/SearchButton/SearchButton';

export const SearchBar = () => {
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
