import { useRef } from 'react';

import useOutsideClick from '@rooks/use-outside-click';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { burgerMenuAction } from '../../../../store/reducers/toggleBurger/actions';
import { toggleBurgerSelector } from '../../../../store/selectors/selectors';

export const BurgerButton = () => {
  const dispatch = useDispatch();
  const toggleBurger = () => {
    dispatch(burgerMenuAction());
  };
  const isToggleBurgerAction = useSelector(toggleBurgerSelector);
  const reference = useRef<HTMLButtonElement>(
    null
  ) as React.MutableRefObject<HTMLButtonElement>;

  useOutsideClick(reference, () =>
    isToggleBurgerAction ? toggleBurger() : undefined
  );

  return (
    <button
      ref={reference}
      className={
        isToggleBurgerAction
          ? `${styles.burger_button} ${styles.active}`
          : `${styles.burger_button}`
      }
      onClick={toggleBurger}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
