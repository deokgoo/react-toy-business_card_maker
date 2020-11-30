import React, {useRef} from 'react';
import style from './card-editor-form.module.css'
import ImageFileInput from '../image-file-input/image-file-input';
import Button from '../button/button';

const CardEditorForm = ({card, updateCard, deleteCard}) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();

  const {
    name,
    company,
    title,
    email,
    message,
    theme,
  } = card;

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={style.form}>
      <input
        className={style.input}
        ref={nameRef}
        type="text"
        name="name"
        onChange={onChange}
        value={name}
      />
      <input
        className={style.input}
        ref={companyRef}
        type="text"
        name="company"
        onChange={onChange}
        value={company}
      />
      <select
        className={style.select}
        ref={themeRef}
        name="theme"
        onChange={onChange}
        value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={style.input}
        ref={titleRef}
        type="text"
        name="title"
        onChange={onChange}
        value={title}
      />
      <input
        className={style.input}
        ref={emailRef}
        type="text"
        name="email"
        onChange={onChange}
        value={email}/>
      <textarea
        className={style.textarea}
        ref={messageRef}
        name="message"
        onChange={onChange}
        value={message}
      />
      <div className={style.fileInput}>
        <ImageFileInput/>
      </div>
      <Button name="Delete" onClick={onSubmit} value='Delete'/>
    </form>
  )
};

export default CardEditorForm;
