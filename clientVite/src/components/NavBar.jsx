import styles from "./NavBar.module.css";
import { useState ,Fragment , useEffect }from "react";
import { Link, useNavigate } from 'react-router-dom';
import { usePlay } from "../hooks/usePlay";
import  DropMenu  from "./DropMenu";

import LogIn from "./LogIn";

export default function NavBar ({handleLog , handleHand}){
  const {play , sendForm ,update , logOut ,sessionLogIn} = usePlay();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
  const [showMenu , setShowmenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState();

  const menuLogIn = () => {
    setShowLogIn(false);
  };

  const menuClose = () => {
   setShowLogIn(false);
  };
  const showModal = (e) => {
    e.preventDefault();
    setShowLogIn(true);
  }
  const dropMenu = (e) => {
   e.preventDefault();
    setShowmenu(true);
  }
  const sessionClose = () => {
    logOut();

  }
    return (
     <>
     {
     showLogIn?
      <LogIn open = {menuLogIn} close = {menuClose}></LogIn>:
    null
     }
      <nav className={styles.navigation} >
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/numbers">About</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          { play.status === "on-line"?(
            <li>
            <DropMenu
              handleLogOut = {sessionClose}
            />
            </li>
          ) : (
            <>
              <li>
              <a onClick={showModal}>Ingresar</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav> 
     </>
    )
}