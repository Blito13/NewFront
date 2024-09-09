import React, { useEffect, useState } from 'react';
import styles from "./LogIn.module.css";
import { usePlay } from '../hooks/usePlay';


const LogIn = ({open , close}) => {
const { play, sendForm, update, logOut, sessionLogIn  } = usePlay();
console.log(sessionLogIn);
const [userName , setUserName] =  useState("");
const [password , setPassword] = useState("");


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
    <div className={styles.formulario}>
       <form  onSubmit={ handleSubmit}>
      <button className={styles.closeBtn} onClick={handleClose}>X</button>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
      <button 
      className={styles.btn}
       type="submit"
       onClick={handleSubmit}
       >Log In</button>
      </div>
    </form>
     </div>
  );
};

export default LogIn;