import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { LogoButton } from '~/shared/ui/buttons/LogoButton/LogoButton';
import { Submit } from '~/shared/ui/Submit/Submit';
import { changeThemeSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

interface LocationState {
  email: string;
}

export const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as LocationState).email;
  const hasTheme = useSelector(changeThemeSelector);

  return (
    <>
      <LogoButton className={styles.logo_button} />
      <form
        onSubmit={() => {
          navigate('/');
        }}
        className={
          hasTheme
            ? `${styles.form_container} ${styles.light}`
            : `${styles.form_container}`
        }
      >
        <p>
          Пожалуйста активируйте свой аккаунт по ссылке активации на вашей почте{' '}
          <b>{email}</b>
          <br />
          Пожалуйста, проверьте свою почту
        </p>
        <Submit value={'Домой'} />
      </form>
    </>
  );
};
