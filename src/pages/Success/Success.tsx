import { useNavigate } from 'react-router-dom';

import { LogoButton } from '~/shared/ui/buttons/LogoButton/LogoButton';
import { Submit } from '~/shared/ui/Submit/Submit';

import styles from './styles.module.scss';

export const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <LogoButton className={styles.logo_button} />
      <form
        onSubmit={() => {
          navigate('/signin');
        }}
        className={styles.form_container}
      >
        <div>
          <p>Почта подтверждена!</p>
          <p>Регистрация прошла успешно.</p>
        </div>
        <Submit value={'Авторизироваться'} />
      </form>
    </>
  );
};
