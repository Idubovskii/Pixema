import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signOutAction } from '~/store/reducers/auth/actions';

import styles from './styles.module.scss';

interface IProperties {
  isActive: boolean;
}

export const DropDownMenu = (properties: IProperties) => {
  const { isActive } = properties;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOutAction());
  };

  return (
    <div
      className={
        isActive === true
          ? `${styles.active} ${styles.dropdown_container}`
          : `${styles.dropdown_container}`
      }
    >
      <button
        onClick={() => {
          navigate('/settings');
        }}
      >
        Изменить профиль
      </button>
      <hr />
      <button onClick={handleLogOut}>Выход</button>
    </div>
  );
};
