import React  from 'react';
import style from './editor.module.css';
import CardEditorForm from '../card-editor-form/card-editor-form';

const Editor = ({ cards, updateCard, deleteCard }) => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Card Maker</h1>
      </div>
      {
        Object.keys(cards).map(key => (
          <CardEditorForm
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />)
        )
      }
    </div>
  );
};

export default Editor;
