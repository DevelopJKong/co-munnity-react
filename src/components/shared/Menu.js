// src/components/shared/Menu.js
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.list}>
        <Link to="/"><i class="fas fa-home"></i>Home</Link>
      </div>
      <div className={styles.list}>
        <Link to="/explore"><i class="far fa-compass"></i>Explore</Link>
      </div>
      <div className={styles.list}>
        <Link to="/subscription"><i class="fas fa-book"></i>Subscription</Link>
      </div>
      <div className={styles.list}>
        <Link to="/homework"><i class="fas fa-pencil-alt"></i>Assignment</Link>
      </div>
    </div>
  );
}

export default Menu;