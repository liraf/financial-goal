import React from 'react';
import styles from './Header.module.scss';

import logo from '../../assets/logoOrigin.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Origin" />
    </header>
  );
};

export default Header;
