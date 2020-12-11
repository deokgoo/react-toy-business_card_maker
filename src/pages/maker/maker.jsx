import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';
import style from './maker.module.css';

const Maker = ({FileInput, cardRepository}) => {
  // const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId] = useState(123);

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      cardRepository.saveCard(userId, updated);
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
        <Editor FileInput={FileInput} cards={cards} updateCard={createOrUpdateCard} deleteCard={deleteCard}
                addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
    </section>
  );
};

export default Maker;
