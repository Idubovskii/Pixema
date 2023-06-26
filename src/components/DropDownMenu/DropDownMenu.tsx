import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

interface IProperties {
  isActive: boolean;
}

export const DropDownMenu = (properties: IProperties) => {
  const { isActive } = properties;
  const navigate = useNavigate();

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
    </div>
  );
};
