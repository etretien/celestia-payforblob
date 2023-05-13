import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

export type InputProps = {
  name: string;
  value: string;
  label: string;
  onChange: (name: string, value: string) => void;
  type?: string;
  isRequired?: boolean;
  error?: string;
  disabled?: boolean;
  maxLength?: number;
  postfix?: string;
  additionalText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      label,
      onChange,
      type = 'text',
      isRequired = true,
      error,
      disabled,
      maxLength,
      postfix,
      additionalText,
    },
    ref,
  ) => {
    const [isBlurred, setIsBlurred] = useState<boolean>(true);
    const handleFocus = () => {
      setIsBlurred(false);
    };
    const handleBlur = () => {
      setIsBlurred(true);
    };
    return (
      <div className={classNames(styles.formItem)}>
        <input
          data-testid="input"
          id={name}
          type={type}
          className={classNames(styles.formInput, { formInputErr: !!error })}
          required={isRequired}
          value={
            postfix && isBlurred && value.length ? `${value} ${postfix}` : value
          }
          onChange={e => onChange(name, e.target.value)}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label htmlFor={name} className={classNames(styles.formLabel)}>
          {label}
        </label>
        {error && <span className={classNames(styles.error)}>{error}</span>}
        {additionalText && (
          <span className={classNames(styles.inputAdditionalText)}>
            {additionalText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
