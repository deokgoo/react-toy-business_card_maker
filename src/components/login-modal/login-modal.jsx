import React from 'react';
import style from './login-modal.module.css';
import Authentication from '../../services/firebase/authentication';

const LoginModal = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <img className={style.logo} src="images/logo.png" alt="logo"/>
          <div className={style.title}>
            Business Card Maker
          </div>
        </div>
        <div className={style.body}>
          <div className={style.contentTitle}>Login</div>
          <button className={style.btn} onClick={() => {new Authentication().googleLogin()}}>Google</button>
          <button className={style.btn}>Github</button>
        </div>
        <div className={style.footer}>
          <div className={style.description}>
            Present deok9
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal;