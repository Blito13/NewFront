import React from "react";
import LogIn from "./LogIn";
import styles from './Home.module.css';
import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { getLoged, getLogedStatus } from "../redux/actions";

function Home () {
    const dispatch = useDispatch();
    const token =  useSelector(state => state.token);
    console.log(token);
    useEffect(()=>{
        return () =>{

            dispatch(getLogedStatus(token));
        }
    },[dispatch])
    return(
        <div className ={styles.container}>
        <div className={styles.title}>
            <h1>
            renderizar el pozo actual en vivo de las  apuestas con el premio y sus respectivos aciertos en base a la tabla
            coincidencias de posicion se suman (jugar el mismo numero y la misma posicion) ambas apuestas se suman 
            la tira se vende toda juntala recompensa debe ser directamente proporcional a el monto apostado (prorrata)
            varios ganadores 
            </h1>
        </div>
        </div>
    )
} 
export default Home;