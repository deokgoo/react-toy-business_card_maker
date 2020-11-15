import React  from 'react';
import { useHistory } from 'react-router-dom';
import style from './login-modal.module.css';

const LoginModal = ({ authService }) => {
  const history = useHistory();
  const goToMaker = userId => {
    console.log(userId);
    history.push({
      pathName: '/maker',
      state: {id: userId},
    })
  }

  const onLogin = evt => {
    authService.login(evt.currentTarget.textContent)
      .then(data => goToMaker(data.user?.uid));
  }

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
          <button className={style.btn} onClick={onLogin}>Google</button>
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