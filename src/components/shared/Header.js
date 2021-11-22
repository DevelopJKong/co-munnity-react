// src/components/shared/Header.js
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.rowFrist}>
        <i class="fas fa-bars"></i>
      </div>
      <div className={styles.rowSecond}>
        <i class="fab fa-youtube"></i>
        <span>Youtube</span>
        <form method="GET">
          <input type="text" placeholder="Search Video" name="search" />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className={styles.rowThird}>
        <i class="fas fa-braille"></i>
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
}

export default Header;
