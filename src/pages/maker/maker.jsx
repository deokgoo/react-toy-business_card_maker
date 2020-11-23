import React from 'react';
import style from './maker.module.css';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';

const Maker = () => {
  return (
    <section className={style.container}>
      <Editor/>
      <Preview/>
    </section>
  );
}

export default Maker;