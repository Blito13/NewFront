import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import dados   from "../img/fichas.jpg";
import fly  from "../img/flyMoney.jpg";
import moneda from "../img/moneda.jpg";
import numbers   from "../img/numbers.jpg";
import Session from './Session';
import LogIn from '../components/LogIn';
export default function NavBar (){


const [isNavExpanded, setIsNavExpanded] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showLogin , setShowlogin] = useState(false);
  const handleLogin = () => {
    // handle login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleClick = () =>{
    setShowlogin(true)
  }
    return (
     <>
      <nav className={styles.navigation}>
      <a href="/" className={styles.brandName}>
       Tutti Cuanty
      </a>
      <button className={styles.hamburger} onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
      </button>
      <div 
         className={
          isNavExpanded ?`${styles.navigationMenu} ${styles.expanded}`: styles.navigationMenu
        }>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/start">About</a>
          </li>
          <li>
          <div >
      {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
      ) : (
        <li>
          <button onClick={handleLogin}>Ingresar</button>
        </li>
      )}
    </div>
          </li>
        </ul>
      </div>
    </nav> {
      isLoggedIn? (
        <div className={styles.crazyBox}><LogIn></LogIn></div>
      ): null
    }
     </>
    )
}