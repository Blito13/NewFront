import React, { useState  , useEffect} from 'react';
import LogIn from '../components/LogIn';
import styles from './Session.module.css';
//ponerlo en el navbar (estees un componente condicional que renderiza el componente login segun el estado del usuario)
const Session = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // handle login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.navigation}>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <LogIn onLogin={handleLogin}  />
        </div>
      )}
    </div>
  );
};

export default Session;