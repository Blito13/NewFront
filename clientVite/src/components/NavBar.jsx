import styles from "./NavBar.module.css";
import { useState ,Fragment , useEffect }from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavBarMenu from "./NavBarMenu";


import LogIn from "./LogIn";

export default function NavBar ({handleLog , handleHand}){
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
  const [showMenu , setShowmenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const menuLogIn = () => {
    setShowLogIn(false);
  };

  const menuLogOut = () => {
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
    return (
     <>
     {
     showLogIn?
      <LogIn open = {menuLogIn} close = {menuLogOut}></LogIn>:
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
          {
            loggedIn?
            <button onClick = {dropMenu}> aca vendria la foto del user</button>:
        <li>
          <a onClick={showModal}>Ingresar</a>
        </li>
          }
     
        </ul>
      </div>
    </nav> 
    {
      showMenu?
      <NavBarMenu func = {handleLogout} ></NavBarMenu>:
      null
    }
     </>
    )
}