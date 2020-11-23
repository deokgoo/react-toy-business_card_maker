import React, { useState } from 'react';
import style from './maker.module.css';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';

const Maker = () => {
  const [items] = useState([{
    name: 'deok',
    company: 'FFG',
    title: 'deokTitle',
    email: 'kkddgg1001@gmail.com',
    message: 'message',
    theme: 'colorful',
  }, {
    name: 'deok2',
    company: 'FFG',
    title: 'deokTitle',
    email: 'kkddgg1001@gmail.com',
    message: 'message',
    theme: 'dark',
  }]);
  return (
    <section className={style.container}>
      <Editor cards={items}/>
      <Preview cards={items}/>
    </section>
  );
}

export default Maker;