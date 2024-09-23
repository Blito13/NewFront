import React, { useEffect, useState } from 'react';
import styles from './Section.module.css';
import signinStyles from './Signin.module.css';
import { usePlay } from '../hooks/usePlay';


const LogIn = ({open , close}) => {
const { play, sendForm, update, logOut, sessionLogIn  } = usePlay();
console.log(play);
const [userName , setUserName] =  useState("");
const [password , setPassword] = useState("");

console.log(play )
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let res = {
      email: userName,
      password : password
    }
    sessionLogIn(res)
    console.log(res)
    console.log("ok")

  };
  const handleClose = () => {
   close();
  };
  
  return (
    <section className={styles.section}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      {
        play.message === "ok"? close() : 
        play.message
      }

    <div className={signinStyles.signin}>
      <div className={signinStyles.content}>
        <h5>Sign In</h5>
        <form className={signinStyles.form}>
          <div className={signinStyles.inputBox}>
            <input type="text" required />
            <i>Username</i>
          </div>
          <div className={signinStyles.inputBox}>
            <input type="password" required />
            <i>Password</i>
          </div>
          {/* <div className={signinStyles.links}>
            <a href="#">Forgot Password?</a>
            <a href="#">Sign Up</a>
          </div> */}
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  </section>
  );
};

export default LogIn;