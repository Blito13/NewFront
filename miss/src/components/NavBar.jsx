import styles from "./NavBar.module.css"
import { Link} from 'react-router-dom';


export default function NavBar (){
const cart     = [1]
const arrayCar = [1]

const fav = [1]
const arrayFav = [1]



    return (
        <div className={styles.container}>
             <div className={styles.leftContent}>
          <Link to="/" className={styles.divLogo}>
            <div>
              <img
                className={styles.logo}
                
                alt="logo"
              />
            </div>
          </Link>
            </div>
            <ul className={styles.menu}>
          <Link to="/">
            <button className={styles.buttonNavBar}>Home</button>
          </Link>
          <Link to="/Shop">
            <button className={styles.buttonNavBar}>QuikPLay</button>
          </Link>
          <div className={styles.favCarBtns}>
            <div className={styles.favCarBtns}>
              <img
                className={styles.icon}
                src={cart}
                alt="notifications"
               // onClick={() => validation((valit = "car"))}
              />
              {arrayCar.length ? <span className={styles.iconsCartFav}>{arrayCar.length}</span> : null}
            </div>
            <div className={styles.favCarBtns}>
              <img
                className={styles.icon}
                src={fav}
                alt="favorite numbers"
                //onClick={() => validation((valit = "favorites"))}
              />
              {arrayFav.length ? <span className={styles.iconsCartFav}>{arrayFav.length}</span> : null}
            </div>
          </div>
        </ul>
            <div className={styles.divLogin}>
              <button className={styles.loginText}>Box</button>
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
              
        </div>
    )
}