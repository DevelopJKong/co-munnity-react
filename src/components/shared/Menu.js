// src/components/shared/Menu.js
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu({activeMenu,check}) {
  console.log(check,activeMenu);

  if(!check){
  return (
    <div className={styles.menu}>
      <div className={styles.link}>
        <Link to="/" ><i className="fas fa-home"></i>Home</Link>
      </div>
      <div className={styles.link}>
        <Link to="/explore"><i className="far fa-compass"></i>Explore</Link>
      </div>
      <div className={styles.link}>
        <Link to="/subscription"><i className="fas fa-book"></i>Subscription</Link>
      </div>
      <div className={styles.link}>
        <Link to="/homework"><i className="fas fa-pencil-alt"></i>Assignment</Link>
      </div>
    </div>
  );}else{
    return <div></div> ;
  }
}

export default Menu;