import { type FormEventHandler } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { Submit } from '../../shared/ui/Submit/Submit';
import { ThemeColorAction } from '../../store/reducers/theme/actions';
import { changeThemeSelector } from '../../store/selectors/selectors';

export const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasTheme = useSelector(changeThemeSelector);
  const toggleTheme = () => {
    dispatch(ThemeColorAction());
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={
          hasTheme
            ? `${styles.settings_container} ${styles.light}`
            : `${styles.settings_container}`
        }
      >
        <h2>Тема</h2>
        <div className={styles.theme_container}>
          <div className={styles.theme_description}>
            <p>Тёмная тема</p>
            <p>Используется тёмная тема</p>
          </div>
          <div className={styles.switch_container}>
            <input
              id="toggle"
              className={`${styles.theme_toggle} ${styles.theme_toggle_round}`}
              type="checkbox"
              checked={!hasTheme}
              onChange={toggleTheme}
            />
            <label htmlFor="toggle"></label>
          </div>
        </div>
        <div className={styles.settings_footer}>
          <button
            onClick={() => navigate('/')}
            className={styles.cancel_button}
          >
            Закрыть
          </button>
          <Submit value={'Сохранить'} />
        </div>
      </form>
    </>
  );
};
