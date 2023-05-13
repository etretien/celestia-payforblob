import React from 'react';
import styles from './ErrorTransaction.module.scss';

const ErrorTransaction = ({ error }: { error: Record<string, string> }) => {
  return (
    <div className={styles.wrap}>
      <h2>
        Our leprechauns failed{' '}
        <span role="img" aria-label="smile">
          🙁
        </span>{' '}
        Smth went wrong
      </h2>
      {Object.entries(error).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
    </div>
  );
};

export default ErrorTransaction;
