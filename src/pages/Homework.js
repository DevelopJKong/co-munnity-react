// src/pages/Home.js
import Layout from "../components/shared/Layout";
import React, { useState } from "react";
import styles from "../App.module.css";
import ContentsLayout from '../components/shared/ContentsLayout';
function Homework() {
  const [number, setNumber] = useState(0);
  function plus() {
    setNumber(number + 1);
  }
  
  return (
    <Layout activeMenu="homework">
     <ContentsLayout> <div className={styles.mainLayout}> 
        {number % 2 === 0 ? <div className={styles.colorRed}>True!</div> : <div className={styles.colorBlue}>False!</div>}
        <div><button onClick={plus}>True?</button></div>
      </div></ContentsLayout>
    </Layout>
  );
}

export default Homework;
