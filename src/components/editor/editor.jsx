import React  from 'react';
import style from './editor.module.css';
import CardEditorForm from '../card-editor-form/card-editor-form';
import CardAddForm from '../card-add-form/card-add-form';

const Editor = ({ FileInput, cards, updateCard, deleteCard, addCard }) => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Card Maker</h1>
      </div>
      {
        Object.keys(cards).map(key => (
          <CardEditorForm
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />)
        )
      }
      <CardAddForm FileInput={FileInput} addCard={addCard}/>
    </div>
  );
};

export default Editor;
