import React from 'react';
import style from './preview.module.css';
import Card from "../card/card";

const Preview = ({ cards }) => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Card Preview</h1>
      </div>
      <ul className={style.cards}>
        {cards.map(card => <Card card={card} key={card.name}/>)}
      </ul>

    </div>

  );
}

export default Preview;