import { useRef, useState } from 'react';

import useOutsideClick from '@rooks/use-outside-click';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { ArrowSvg } from '../../../assets/svg/ArrowSvg';

import { DropDownMenu } from '../../DropDownMenu/DropDownMenu';

export const UserButton = () => {
  const [isToggle, setToggle] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    if (user) {
      setToggle(!isToggle);
    } else {
      navigate('/signin');
    }
  };
  const reference = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  return (
    <div className={styles.user_block}>
      <div
        ref={reference}
        onClick={handleClick}
        className={
          hasTheme
            ? `${styles.user_container} ${
                location.pathname === '/' ? '' : `${styles.light}`
              }`
            : `${styles.user_container}`
        }
      >
        <div className={styles.user_info}>
          <button>{user ? `${shortname}` : 'В'}</button>
          <span>{user ? `${user.username}` : 'Войти'}</span>
        </div>
        <ArrowSvg className={isToggle ? `${styles.active_arrow}` : ''} />
      </div>
      <DropDownMenu isActive={isToggle} />
    </div>
  );
};
