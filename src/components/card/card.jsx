import React from 'react';
import style from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
const getStyle = (theme) => {
  switch(theme) {
    case 'dark':
      return style.dark;
    case 'light':
      return style.light;
    case 'colorful':
      return style.colorful;
    default:
      throw new Error(`unknown theme ${theme}`);
  }
};
const Card = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileURL,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${style.card} ${getStyle(theme)}`}>
      <img className={style.avatar} src={url} alt="profile" />
      <div className={style.info}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.company}>{company}</p>
        <p className={style.title}>{title}</p>
        <p className={style.email}>{email}</p>
        <p className={style.message}>{message}</p>
      </div>
    </li>
  );
};

export default Card;
