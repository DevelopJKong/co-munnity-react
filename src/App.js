// src/App.js
import Layout from './components/shared/Layout';
import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0); 
  function plus() {
    setNumber(number + 1);
}
  return (
    <Layout>
      <div><button onClick={plus}>True?</button></div>
      {number % 2 === 0 && <div>True!</div>}
    </Layout>
  );
}

export default App;