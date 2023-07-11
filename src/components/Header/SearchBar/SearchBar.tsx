import { useState } from 'react';
import type React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FilterButton } from '~/shared/ui/buttons/FilterButton/FilterButton';
import { SearchButton } from '~/shared/ui/buttons/SearchButton/SearchButton';
import { changeThemeSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

export const SearchBar = () => {
  const hasTheme = useSelector(changeThemeSelector);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onClick = () => {
    if (searchText) {
      navigate(`/search/${searchText}`);
      setSearchText('');
    }
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClick();
    }
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
        onKeyDown={onKeyPress}
      />
      <SearchButton
        onClick={onClick}
        className={searchText ? `${styles.button}` : `${styles.disable}`}
      />
      <FilterButton />
    </label>
  );
};
