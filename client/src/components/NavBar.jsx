import styles from "./NavBar.module.css";
import { useState ,Fragment }from "react";
import { Link, useNavigate } from 'react-router-dom';
import dados   from "../img/fichas.jpg";
import fly  from "../img/flyMoney.jpg";
import moneda from "../img/moneda.jpg";
import numbers   from "../img/numbers.jpg";
import Session from './Session';
import LogIn from '../components/LogIn';
export default function NavBar ({showReg}){


const [isNavExpanded, setIsNavExpanded] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showLogin , setShowlogin] = useState(false);
  const handleLogin = () => {
    // handle login logic here
  showReg(true)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    showReg(false)
    setIsLoggedIn(false);
    console.log("prpr-pr-pr-pr")
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
          {/* {
          isLoggedIn? (
            <div className={styles.crazy}>
                  <Fragment>
                <LogIn></LogIn>
              </Fragment>
                </div>
          ): null} */}
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
      {isLoggedIn ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
      ) : (
        <li>
          <a onClick={handleLogin}>Ingresar</a>
        </li>
      )}
        </ul>
      </div>
    </nav> {/* {
      isLoggedIn? (
        <div className={styles.crazy}>
              <Fragment>
            <LogIn></LogIn>
          </Fragment>
            </div>
        
       
      ): null
    } */}
     </>
    )
}