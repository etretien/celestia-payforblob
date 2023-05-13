import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import styles from './Generate.module.scss';

const Generate = ({
  label,
  value,
  id,
  error,
  onChange,
  onClick,
}: {
  label: string;
  value?: string;
  id: string;
  error: string;
  onChange: (name: string, value: any) => void;
  onClick: (id: string) => void;
}) => {
  return (
    <div className={styles.generate}>
      <div className={styles.generateWrap}>
        <Input
          name={id}
          value={value ?? ''}
          label={label}
          error={error}
          onChange={onChange}
        />
        <Button
          text="Generate"
          onClick={() => onClick(id)}
          type="button"
          size="m"
          background="transparent"
        />
      </div>
    </div>
  );
};

export default Generate;
