// src/App.js
import Layout from './components/shared/Layout';
import styles from "./App.module.css";
import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0); 
  function plus() {
    setNumber(number + 1);
}
  return (
    <Layout>
      <div><button onClick={plus}>True?</button></div>
      {number % 2 === 0 ? <div className={styles.colorRed}>True!</div> : <div className={styles.colorBlue}>False!</div>}
    </Layout>
  );
}

export default App;