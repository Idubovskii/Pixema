import {
  type ButtonHTMLAttributes,
  type ReactNode,
  useRef,
  forwardRef
} from 'react';

import cn from 'classnames';

interface ButtonBaseProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  isRipple?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProperties>(
  (
    {
      className,
      startIcon = null,
      endIcon = null,
      isRipple = false,
      animationDuration = 500,
      children,
      ...properties
    },
    reference
  ) => {
    const buttonReference = useRef<HTMLButtonElement>(null);
    const commonReference = reference || buttonReference;

    return (
      <button
        ref={commonReference}
        {...properties}
        className={cn('button-base', className)}
      >
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
