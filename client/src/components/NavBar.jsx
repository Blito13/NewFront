import styles from "./NavBar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import dados   from "../img/fichas.jpg"
import timer   from "../img/timer.jpg"
import numbers   from "../img/numbers.jpg"
export default function NavBar (){
const cart     = 5
var arrayCar = [[],[],[],[]]

const fav = [43]
const arrayFav = [[],[],[],[],[]]



    return (
        <div className={styles.container}>
             <div className={styles.leftContent}>
          <Link to="/" className={styles.divLogo}>
            <div>
              <img
                className={styles.logo}
                src = {dados}
                alt="logo"
              />
            </div>
            
          </Link>
              <h2 className={styles.leftContent}>TuttiCuanti</h2>
            </div>
            <div>

            </div>
            <ul className={styles.menu}>
          <Link to="/" className={styles.divLogin}>
            <button className={styles.loginText/* buttonNavBar */}>Home</button>
          </Link >
          <Link to="/Start" className={styles.divLogin}>
            <button className={styles.loginText/* buttonNavBar */}>List of gambles</button>
          </Link>
            <Link to = "/Create" className={styles.divLogin}>
              <button className={styles.loginText}>Lets PLay</button>

            </Link>
          <div className={styles.favCarBtns}>
            <div className={styles.favCarBtns}>
              <img
                className={styles.icon}
                src={timer}
                alt="Schedules"
               // onClick={() => validation((valit = "car"))}
              />
              {arrayCar.length ? <span className={styles.iconsCartFav}>{arrayCar.length}</span> : null}
            </div>
            <div className={styles.favCarBtns}>
              <img
                className={styles.icon}
                src={numbers}
                alt="Numbers"
                //onClick={() => validation((valit = "favorites"))}
              />
              {arrayFav.length ? <span className={styles.iconsCartFav}>{arrayFav.length}</span> : null}
            </div>
          </div>
            <div className={styles.divLogin} /* onClick={() => loginWithRedirect()} */>
                <button
                  className={styles.loginText}
                  /* onClick={() => loginWithRedirect()} */
                >
                  {" "}
                  Login{" "}
                </button>
              </div>
        </ul>
              
        </div>
    )
}