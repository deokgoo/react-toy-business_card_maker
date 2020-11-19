import React, { memo } from 'react';
import style from "./footer.module.css";

const Footer = memo(({isLogin}) => {
  return (
    <div className={`${style.footer} ${isLogin ? style.login : ''}`}>
      <div className={style.description}>
        Present deok9
      </div>
    </div>
  );
});

export default Footer;