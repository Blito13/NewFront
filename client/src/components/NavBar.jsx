import styles from "./NavBar.module.css";
import { useState } from "react";
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
const [isNavExpanded, setIsNavExpanded] = useState(false)



    return (
     
      <nav className={styles.navigation}>
      <a href="/" className={styles.brandName}>
        MacroSoft
      </a>
      <button className={styles.hamburger} onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div 
         className={
          isNavExpanded ?   styles.navigationMenu2 : styles.navigationMenu
        }>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}