// src/components/shared/Layout.js
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, {useState} from 'react';


function Layout({ children, activeMenu }) {
  const [check, isMenu] = useState(true);
  function showMenu() {
    console.log(check);
    isMenu(!check);
  }
  return (
    <div className={styles.container}>
      <Header showMenu={showMenu}/>
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} check={check}/>
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout; 