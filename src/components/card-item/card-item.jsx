import React from 'react';
import style from './card-item.module.css';

const CardItem = () => {
  return (
    <form className={style.form}>
      <input className={style.input} type="text"/>
      <input className={style.input} type="text"/>
      <select className={style.select} name="" id="">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={style.input} type="text"/>
      <input className={style.input} type="text"/>
      <textarea className={style.textarea} name="" id="" cols="30" rows="10"></textarea>
      <button></button>
      <button></button>
    </form>
  )
}

export default CardItem;