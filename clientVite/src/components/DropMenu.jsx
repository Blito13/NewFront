import React from "react";
import { useState } from "react";
import { usePlay } from "../hooks/usePlay";
import styles from "./DropMenu.module.css"
const DropMenu = ({handleLogOut}) => {
    const {play , sendForm ,update , logOut ,sessionLogIn} =  usePlay();
    console.log(play)

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
    <div className={styles.dropdown}>
      <button onClick={toggleMenu}>
        Mi Cuenta
      </button>
      {isOpen && (
        <ul className={styles.dropdownmenu}>
          <li>Perfil</li>
          <li>Configuraciones</li>
          <li onClick={handleLogOut}>Cerrar Sesión</li>
        </ul>
      )}
    </div>
        </>
    )
};
export default DropMenu;