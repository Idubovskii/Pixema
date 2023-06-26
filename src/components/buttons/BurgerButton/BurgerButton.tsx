import { useRef } from 'react';

import styles from './styles.module.scss';

export const BurgerButton = () => {
  const reference = useRef<HTMLButtonElement>(
    null
  ) as React.MutableRefObject<HTMLButtonElement>;

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
