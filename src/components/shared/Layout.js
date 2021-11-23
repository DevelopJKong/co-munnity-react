// src/components/shared/Layout.js
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, {useState} from 'react';


function Layout({ children, activeMenu }) {
  const [check, isMenu] = useState(0);
  function checkMenu() {
      if(check === true) {
        isMenu(false);
      } else {
        isMenu(true);
      }
  }
  return (
    <div className={styles.container}>
      <Header showMenu={checkMenu}/>
      <div className={styles.layout}>
        {check === true ? <Menu activeMenu={activeMenu} showMenu={checkMenu}/>: <div/>}
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout; 