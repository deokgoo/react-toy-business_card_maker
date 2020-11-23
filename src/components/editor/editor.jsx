import React, { useState } from 'react';
import style from './editor.module.css';
import CardItem from '../card-item/card-item';

const Editor = () => {
  const [items] = useState([1, 2, 3]);
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Card Maker</h1>
      </div>
      {
        items.map((x) => <CardItem ke={x}/>)
      }
    </div>
  );
}

export default Editor;