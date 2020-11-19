import React from 'react';
import style from "./header.module.css";

const Header = ({isLogin}) => {
  return (
    <div className={`${style.header} ${isLogin ? style.login : ''}`}>
      <img className={style.logo} src="images/logo.png" alt="logo"/>
      <div className={style.title}>
        Business Card Maker
      </div>
    </div>
  );
};

export default Header;