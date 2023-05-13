import React from 'react';
import styles from './TransactionDetails.module.scss';
const TransactionDetails = ({ data }: { data: Record<string, string> }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Your transaction details</h2>
      <span>Height</span>
      <p>{data.height}</p>
      <span>Txhash</span>
      <p>{data.txhash}</p>
      <span>Gas_used</span>
      <p>{data.gas_used}</p>
    </div>
  );
};

export default TransactionDetails;
