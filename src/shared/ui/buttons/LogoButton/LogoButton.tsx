import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { LogoSvg } from '../../../../assets/svg/LogoSvg';
import {
  changeThemeSelector,
  toggleBurgerSelector
} from '../../../../store/selectors/selectors';

interface IProperties {
  className?: string;
}

export const LogoButton = (properties: IProperties) => {
  const { className = '' } = properties;
  const location = useLocation();
  const navigate = useNavigate();
  const hasTheme = useSelector(changeThemeSelector);
  const hasBurger = useSelector(toggleBurgerSelector);

  return (
    <button
      onClick={() => navigate('/')}
      className={
        hasTheme
          ? `${className} ${styles.logo_button} 
                ${
                  location.pathname !== '/' && !hasBurger
                    ? `${styles.light}`
                    : ''
                }`
          : `${styles.logo_button} ${className}`
      }
    >
      <LogoSvg />
    </button>
  );
};
