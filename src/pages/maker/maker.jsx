import React, { useState } from 'react';
import style from './maker.module.css';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';

const Maker = () => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'deok',
      company: 'FFG',
      theme: 'colorful',
      title: 'deokTitle',
      email: 'kkddgg1001@gmail.com',
      message: 'message',
      fileName: 'deok',
      fileURL: null,
    },
    '2': {
      id: '2',
      name: 'deok2',
      company: 'FFG',
      theme: 'dark',
      title: 'deokTitle',
      email: 'kkddgg1001@gmail.com',
      message: 'message',
      fileName: 'deok',
      fileURL: null,
    },
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    })
  };

  return (
    <section className={style.container}>
      <Editor cards={cards} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
      <Preview cards={cards}/>
    </section>
  );
};

export default Maker;
