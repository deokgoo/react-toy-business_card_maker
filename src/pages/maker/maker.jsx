import React, { useState } from 'react';
import style from './maker.module.css';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';

const Maker = ({ FileInput }) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'deok',
      company: 'FFG',
      theme: 'colorful',
      title: 'deokTitle',
      email: 'kkddgg1001@gmail.com',
      message: 'message',
      fileName: null,
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
      fileName: null,
      fileURL: null,
    },
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  };

  const addCard = card => {
    setCards(cards => ({...cards, [card.id]: card}));
  };

  return (
    <section className={style.maker}>
      <div className={style.container}>
        <Editor FileInput={FileInput} cards={cards} updateCard={createOrUpdateCard} deleteCard={deleteCard} addCard={addCard} />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default Maker;
