import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export type ButtonProps = {
  background?: 'green' | 'transparent';
  type?: 'button' | 'submit';
  size?: 's' | 'm' | 'l';
  text: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({
  background = 'green',
  type = 'button',
  size = 's',
  text,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(styles.btn, styles[`btn_${background}`], styles[`btn_${size}`])}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
