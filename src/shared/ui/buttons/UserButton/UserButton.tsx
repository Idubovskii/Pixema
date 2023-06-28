import { useRef, useState } from 'react';

import useOutsideClick from '@rooks/use-outside-click';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { ArrowSvg } from '../../../../assets/svg/ArrowSvg';
import { DropDownMenu } from '../../../../components/DropDownMenu/DropDownMenu';
import {
  changeThemeSelector,
  userSelector
} from '../../../../store/selectors/selectors';

export const UserButton = () => {
  const [isToggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hasTheme = useSelector(changeThemeSelector);
  const user = useSelector(userSelector);
  const shortname = user?.username[0] ?? '';
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

  useOutsideClick(reference, () => setToggle(false));

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
