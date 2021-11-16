import React, { useState } from 'react';
import Button from './Button';
import Layout from './Layout';

function App() {
  const [number, setNumber] = useState(0);

  function onClickIncrease() {
    setNumber(number + 1);
  }
  function onClickDecrease() {
    setNumber(number - 1);
  }

  function onClickMultiply() {
    setNumber(number * 2);
  }
  return (
    <Layout>
      <div>코뮤니티 구구단</div>
      <div>{number}*1 = {number * 1}</div>
      <div>{number}*2 = {number * 2}</div>
      <div>{number}*3 = {number * 3}</div>
      <div>{number}*4 = {number * 4}</div>
      <div>{number}*5 = {number * 5}</div>
      <div>{number}*6 = {number * 6}</div>
      <div>{number}*7 = {number * 7}</div>
      <div>{number}*8 = {number * 8}</div>
      <div>{number}*9 = {number * 9}</div>
      <Button onClick={onClickIncrease} text="+1" />
      <Button onClick={onClickDecrease} text="-1" />
      <Button onClick={onClickMultiply} text="2*" />
    </Layout>
  );
}

export default App;