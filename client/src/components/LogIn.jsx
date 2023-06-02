import React, { useEffect, useState } from 'react';
import styles from "./LogIn.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getLoged ,getUserState } from '../redux/actions';

const LogIn = ({handle , close}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogedIn ,setIsLogedIn] = useState('culo');
  const status = useSelector(state => state.loged);
  console.log(status)
/*   useEffect(()=>{
    const wewe = isLogedIn
    dispatch(getLoged(wewe))
  },[isLogedIn]) */
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleClose = () => {
   
    close();
    }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(getLoged({email: username ,
                       password : password
                      }))
    // handle login logic here
    handle();
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
          value={username}
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