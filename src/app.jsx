import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import Header from "./components/header/header";
import Router from "./router/router";
import Footer from "./components/footer/footer";

const App = ({authService}) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    authService.authChange(() => {
      setIsLogin(true);
    })
  }, [authService])

  return (
    <div className={style.wrapper}>
      <div className={`${style.container} ${isLogin ? style.login : style.notLogin}`}>
        <Header isLogin={isLogin}/>
        <Router authService={authService} isLogin={isLogin}/>
        <Footer isLogin={isLogin}/>
      </div>
    </div>
  );
}

export default App;