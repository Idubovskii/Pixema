import { useState, useRef, useEffect } from 'react';

import useOutsideClick from '@rooks/use-outside-click';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { allGenres } from '~/constants/constants';
import { CloseButton } from '~/shared/ui/buttons/CloseButton/CloseButoon';
import { Input } from '~/shared/ui/Input/Input';
import { Submit } from '~/shared/ui/Submit/Submit';
import { filterAction } from '~/store/reducers/filter/actions';
import { toggleFilterAction } from '~/store/reducers/toggleFilter/reducer';
import { toggleFilterSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

export const ModalFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasToggleFilter = useSelector(toggleFilterSelector);
  const [stateYearFrom, setStateYearFrom] = useState('1980');
  const [stateYearTo, setStateYearTo] = useState('2023');
  const [stateRatingFrom, setStateRatingFrom] = useState('1');
  const [stateRatingTo, setStateRatingTo] = useState('10');
  const [sortBy, setSortBy] = useState('rating.kp');
  const [hasActiveUl, setActiveUl] = useState(false);
  const [stateGenre, setStateGenre] = useState('');
  const genreReference = useRef<HTMLLabelElement>(
    null
  ) as React.MutableRefObject<HTMLLabelElement>;
  const modalReference = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

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

  const handleClick = () => {
    dispatch(
      filterAction(
        sortBy,
        stateYearFrom,
        stateYearTo,
        stateRatingFrom,
        stateRatingTo,
        stateGenre
      )
    );
    navigate('/filter');
    dispatch(toggleFilterAction());
  };

  const resetClick = () => {
    setStateYearFrom('1980');
    setStateYearTo('2023');
    setStateRatingFrom('1');
    setStateRatingTo('10');
    setStateGenre('');
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalReference.current &&
        !modalReference.current.contains(event.target as Node)
      ) {
        dispatch(toggleFilterAction());
      }
    };
    if (hasToggleFilter) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch, hasToggleFilter]);

  document.body.style.overflow = hasToggleFilter ? 'hidden' : 'auto';

  useOutsideClick(genreReference, () => setActiveUl(false));

  return (
    <div
      className={
        hasToggleFilter
          ? `${styles.modal_container} ${styles.active}`
          : `${styles.modal_container}`
      }
    >
      <div
        ref={modalReference}
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
                ref={genreReference}
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
