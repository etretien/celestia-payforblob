import React from 'react';
import { LucidLogo } from '../LucidLogo';
import styles from './LoadingTrasaction.module.scss';
const LoadingTransaction = () => {
  return (
    <div className={styles.wrap}>
      <LucidLogo width="96px" height="108px" />
      <h2 className={styles.title}>
        Please wait for a while. Our leprechauns are sending you transaction.
      </h2>
    </div>
  );
};

export default LoadingTransaction;
