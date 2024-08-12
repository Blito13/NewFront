import React from "react";
import styles from './NavBarMenu.module.css';


const NavMenu = ({func}) => {
    const dispatch =  useDispatch();
    /* const status =  useSelector(state => state.loged); */

    const setLogOut = () => {
      console.log(status , "ksadjlkasjdlaskdj");
    func();
     

    }
    return (
        <>
        <div className = {styles.container}>
        <ul>
            <li>saldo</li>
            <li>cambiar contraseña</li>
            <li>perfil</li>
            <button onClick = {setLogOut}>logOut</button>
        </ul>
        </div>
        </>
    )

}
export default NavMenu;