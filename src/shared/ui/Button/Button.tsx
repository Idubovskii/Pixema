import { type ButtonHTMLAttributes } from 'react';

import classNames from 'classnames';

import {
  ButtonAppearance,
  type ButtonAppearances
} from '~/shared/ui/Button/Button.types';

import buttonStyles from './Button.module.scss';

export const Button = ({
  text,
  appearance = ButtonAppearance.Primary,
  ...passThroughProperties
}: {
  appearance?: ButtonAppearances;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...passThroughProperties}
      className={classNames({
        [buttonStyles.btn]: true,
        [buttonStyles[appearance]]: true
      })}
    >
      {text}
    </button>
  );
};
