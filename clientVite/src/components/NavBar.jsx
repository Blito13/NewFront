import styles from "./NavBar.module.css";
import { useState ,Fragment , useEffect }from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavBarMenu from "./NavBarMenu";
import { useDispatch,useSelector } from "react-redux";
import { getLoged , getLogedStatus, getUserState, logUser} from "../redux/actions";
import LogIn from "./LogIn";

export default function NavBar ({handleLog , handleHand}){
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
  const [showMenu , setShowmenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch =  useDispatch();


  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar el componente
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn, "aca ");
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);
  
  const handleLogin = () => {
   
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
   
    console.log("handleLogin");
 
    setShowLogIn(false);
   

  };

  const handleLogout = () => {
    setShowmenu(false);
   setShowLogIn(false);
   setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');

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
      <LogIn handle = {handleLogin} close = {handleLogout}></LogIn>:
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
            <Link to="/start">About</Link>
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