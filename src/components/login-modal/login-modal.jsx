import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style from './login-modal.module.css';

const LoginModal = ({authService}) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    })
  }

  const onLogin = evt => {
    authService.login(evt.currentTarget.textContent)
      .then(data => goToMaker(data.user?.uid));
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    });
  })

  return (
    <>
      <div className={style.body}>
        <div className={style.contentTitle}>Login</div>
        <button className={style.btn} onClick={onLogin}>Google</button>
        <button className={style.btn}>Github</button>
      </div>
    </>
  )
}

export default LoginModal;