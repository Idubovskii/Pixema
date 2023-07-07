import { forwardRef } from 'react';

import { SliderArrowSvg } from '~/assets/svg/SliderArrowSvg';

import styles from './styles.module.scss';
interface SliderButtonProperties {
  dir: 'left' | 'right';
}

export const SliderButton = forwardRef<
  HTMLButtonElement,
  SliderButtonProperties
>((properties, reference) => {
  const { dir } = properties;
  return (
    <button
      className={
        dir === 'left'
          ? `${styles.left_arrow} ${styles.arrow}`
          : `${styles.arrow}`
      }
      ref={reference}
    >
      <SliderArrowSvg />
    </button>
  );
});
SliderButton.displayName = 'SliderButton';
