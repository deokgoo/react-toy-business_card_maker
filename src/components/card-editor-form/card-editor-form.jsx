import React from 'react';
import style from './card-editor-form.module.css'
import ImageFileInput from '../image-file-input/image-file-input';
import Button from '../button/button';

const CardEditorForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
  } = card;

  const onSubmit = () => {

  }

  return (
    <form className={style.form}>
      <input className={style.input} type="text" value={name}/>
      <input className={style.input} type="text" value={company}/>
      <select className={style.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={style.input} type="text" value={title}/>
      <input className={style.input} type="text" value={email}/>
      <textarea className={style.textarea} value={message}/>
      <div className={style.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} value='Delete'/>
    </form>
  )
}

export default CardEditorForm;