import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { allGenres } from '../../constants/constants';

import { CloseButton } from '../buttons/CloseButton/CloseButoon';
import { Input } from '../Input/Input';
import { Submit } from '../Submit/Submit';

export const ModalFilter = () => {
  const [stateYearFrom, setStateYearFrom] = useState('1980');
  const [stateYearTo, setStateYearTo] = useState('2023');
  const [stateRatingFrom, setStateRatingFrom] = useState('1');
  const [stateRatingTo, setStateRatingTo] = useState('10');
  const [sortBy, setSortBy] = useState('rating.kp');
  const [hasActiveUl, setActiveUl] = useState(false);
  const [stateGenre, setStateGenre] = useState('');

  const changeValueYearFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    setStateYearFrom(currentValue);
  };
  const changeValueYearTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    setStateYearTo(currentValue);
  };
  const changeValueRatingFrom = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentValue = event.currentTarget.value;
    setStateRatingFrom(currentValue);
  };

  const changeValueRatingTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    setStateRatingTo(currentValue);
  };

  document.body.style.overflow = hasToggleFilter ? 'hidden' : 'auto';

  return (
    <div
      className={
        hasToggleFilter
          ? `${styles.modal_container} ${styles.active}`
          : `${styles.modal_container}`
      }
    >
      <div
        className={
          hasToggleFilter
            ? `${styles.modal_content} ${styles.active}`
            : `${styles.modal_content}`
        }
      >
        <div className={styles.modal_header}>
          <h2>Фильтр</h2>
          <CloseButton />
        </div>
        <div className={styles.modal_main}>
          <div className={styles.sort_by}>
            <h3>Сортировать по</h3>
            <div className={styles.sort_container}>
              <button
                className={sortBy === 'rating.kp' ? `${styles.active}` : ''}
                onClick={() => {
                  setSortBy('rating.kp');
                }}
              >
                Рейтинг
              </button>
              <button
                className={sortBy === 'year' ? `${styles.active}` : ''}
                onClick={() => {
                  setSortBy('year');
                }}
              >
                Год
              </button>
            </div>
          </div>
          <div className={styles.modal_genres}>
            <h3>Жанры</h3>
            <ul className={hasActiveUl ? `${styles.active_ul}` : ''}>
              <label
                onClick={() => {
                  setActiveUl(!hasActiveUl);
                }}
              >
                Выбрать жанр
              </label>
              {allGenres.map((element) => (
                <li
                  className={
                    stateGenre === element.value
                      ? `${styles.ulgenre} ${styles.active}`
                      : `${styles.ulgenre}`
                  }
                  key={element.label}
                  onClick={() => setStateGenre(element.value)}
                >
                  {element.label}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.modal_years}>
            <h3>Годы</h3>
            <div className={styles.modal_years_container}>
              <Input
                type={'text'}
                label={''}
                placeholder={'From'}
                name={'fromyears'}
                value={stateYearFrom}
                onChange={changeValueYearFrom}
              />
              <Input
                type={'text'}
                label={''}
                placeholder={'To'}
                name={'toyears'}
                value={stateYearTo}
                onChange={changeValueYearTo}
              />
            </div>
          </div>
          <div className={styles.modal_rating}>
            <h3>Рейтинг</h3>
            <div className={styles.modal_rating_container}>
              <Input
                type={'text'}
                label={''}
                placeholder={'From'}
                name={'fromrating'}
                value={stateRatingFrom}
                onChange={changeValueRatingFrom}
              />
              <Input
                type={'text'}
                label={''}
                placeholder={'To'}
                name={'torating'}
                value={stateRatingTo}
                onChange={changeValueRatingTo}
              />
            </div>
          </div>
        </div>
        <div className={styles.modal_footer}>
          <button
            onClick={resetClick}
            className={styles.clear_button}
          >
            Очистить фильтр
          </button>
          <Submit
            onClick={handleClick}
            value={'Показать результат'}
          />
        </div>
      </div>
    </div>
  );
};
