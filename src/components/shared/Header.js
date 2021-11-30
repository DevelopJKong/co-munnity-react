// src/components/shared/Header.js
import styles from "./Header.module.css";
import { useState } from 'react';
function Header({showMenu}) {
  // const value = window.location.search.split('=').map( value => {
  //   return value;
  // });
  //   console.log(value[1]);
  const [value, setValue] = useState('');

  function onClick() {
    console.log(value);
    setValue('');
  }

  function onChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={styles.header}>
      <div className={styles.rowFrist}>
        <i className="fas fa-bars" onClick={showMenu}></i>
      </div>
      <div className={styles.rowSecond}>
        <i className="fab fa-youtube"></i>
        <span>Youtube</span>
        <form method="GET">
          <input type="text" placeholder="Search Video" name="search" value={value} onChange={onChange}/>
          <input type="button" value="Search" onClick={onClick} />
        </form>
      </div>
      <div className={styles.rowThird}>
        <i className="fas fa-braille"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
}

export default Header;
