import React, { useRef, useState } from 'react';
import style from './card-add-form.module.css';
import Button from '../button/button';

const CardAddForm = ({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      theme: themeRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addCard(card);
  };

  return (
    <form className={style.form} ref={formRef}>
      <input
        className={style.input}
        ref={nameRef}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        className={style.input}
        ref={companyRef}
        type="text"
        name="company"
        placeholder="company"
      />
      <select
        className={style.select}
        ref={themeRef}
        name="theme"
        placeholder="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={style.input}
        ref={titleRef}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        className={style.input}
        ref={emailRef}
        type="text"
        name="email"
        placeholder="email"/>
      <textarea
        className={style.textarea}
        ref={messageRef}
        name="message"
        placeholder="message"
      />
      <div className={style.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange}/>
      </div>
      <Button name="Add" onClick={onSubmit}/>
    </form>
  );
};

export default CardAddForm;
