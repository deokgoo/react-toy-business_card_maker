import React  from 'react';
import style from './editor.module.css';
import CardEditorForm from '../card-editor-form/card-editor-form';

const Editor = ({ cards }) => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Card Maker</h1>
      </div>
      {
        cards.map((card) => <CardEditorForm card={card} key={card.name}/>)
      }
    </div>
  );
}

export default Editor;