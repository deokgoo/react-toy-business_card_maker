import React, {useState, useEffect} from 'react';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';
import style from './maker.module.css';

const Maker = ({authService, FileInput, cardRepository}) => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    const stopSync = cardRepository.syncCards(authService.getUid(), cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [authService, cardRepository]);

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    cardRepository.saveCard(authService.getUid(), card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });

    cardRepository.removeCard(authService.getUid(), card);
  };

  return (
    <section className={style.maker}>
      <div className={style.container}>
        <Editor FileInput={FileInput} cards={cards} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards}/>
      </div>
    </section>
  );
};

export default Maker;
