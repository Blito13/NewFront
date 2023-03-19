import styles from "./NavBar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import dados   from "../img/fichas.jpg";
import fly  from "../img/flyMoney.jpg";
import moneda from "../img/moneda.jpg";
import numbers   from "../img/numbers.jpg";
export default function NavBar (){
const cart     = 5
var arrayCar = [[],[],[],[]]

const fav = [43]
const arrayFav = [[],[],[],[],[]]



    return (
        <div className={styles.container}>
          <Link to="/">
              <img
                className={styles.logo}
                src = "https://thumbs.dreamstime.com/b/velocidad-logo-icon-design-del-dinero-127653477.jpg"
                alt="logo"
              />
          </Link>
         
             <div className={styles.leftContent}>
              <span className={styles.title}>
                <h1>
                  TuttyCuanty
                  </h1>
                </span>
            <ul className={styles.menu}>
          <li className={styles.buttonNavBar}>
          <a href="/">Home</a>
          </li>
          <li className={styles.buttonNavBar}>
          <a href="/start"> List of gambles</a>
          </li>
          <li className={styles.buttonNavBar}>
          <a href="/create"> Lets play</a>
          </li>
            </ul>
            </div>
               <div className={styles.rigthContent}>
                <ul className={styles.rigthMenu}>  
               <li className={styles.buttonNavBar}>
                <a>LogIn</a>
               </li>
               <li className={styles.buttonNavBar}>
                <a>About Us</a>
               </li>
                </ul>
               </div>
               
        </div>
    )
}