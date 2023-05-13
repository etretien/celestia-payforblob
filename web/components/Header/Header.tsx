import React from 'react';
import Image from 'next/image';
import icon from '../../static/img/black.svg';
import styles from './Header.module.scss';
import logIn from '../../static/img/LogIn.svg';
import Link from 'next/link';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.loginReg}>
        <Link href="https://account.dev.lucidnode.com/auth/login">
          Login /{' '}
        </Link>
        <Link href="https://account.dev.lucidnode.com/auth/registration">
          Register
        </Link>
        <Image
          className={styles.header__iconLogin}
          src={logIn}
          alt="logIn"
          width={18}
          height={18}
        />
      </div>
      <div className={styles.logo}>
        <Image src={icon} alt="logo" width={96} height={96} />
      </div>
      <div className={styles.title}>
        <h1 className={styles.title__text}>
          / Running a{' '}
          <span className={styles.title__logo}>
            <h2 className={styles.title__subtitle}>Celestia</h2>
          </span>{' '}
          node
        </h1>
      </div>
    </header>
  );
};

export default Header;
