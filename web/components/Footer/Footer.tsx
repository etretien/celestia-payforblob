import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link href="/">About</Link>
      <Link href="/">Privacy Policy</Link>
      <Link href="/">User Agreement</Link>
      <Link href="/">© Lucidnode {new Date().getFullYear()}</Link>
    </nav>
  );
};

export default Footer;
