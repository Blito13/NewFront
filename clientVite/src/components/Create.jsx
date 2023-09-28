import React from "react";
import styles from "./Create.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postGame} from "../redux/actions";
import {validate} from "../Utils"

const Create = () => {
    const dispatch = useDispatch();
 
    const [user , setUser] = useState(''); 
    const [estimado , setEstimado]= useState('');
    const [error, setError] = useState({});
    const [input, setInput] = useState({
   name : "",
   apuesta : 0,
   numeros :[],
    });
    useEffect(() => {
        // Verificar si el usuario está autenticado al cargar el componente
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(isLoggedIn, "motumbo");
       
      }, []);
    const handleChange = (e) => {
        e.preventDefault();
        const {name , value} =  e.target;
        setInput({
            ...input,
            [name] : value
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    }
    const handleSubmit =(e) =>{
    
        dispatch(postGame(input));
        setInput({
            name : "",
            apuesta : 0,
            numeros : ""
           })
    }
return (
    <div className={styles.contenedor}>
     <div className={styles.head}>
            <li>
                <ul>
                    estadisticas
                </ul>
                <ul>
                    estadisticas
                </ul>
                <ul>
                    estadisticas
                </ul>
                <ul>
                    estadisticas
                </ul>
                <ul>
                    estadisticas
                </ul>
                <ul>
                    estadisticas
                </ul>
                <ul>
                    total
                </ul>
            </li>
     </div>
  <div className={styles.form}>

        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text'  placeholder = "nombre" name='name' onChange={(e) =>handleChange(e)} />
            <input type='number'  placeholder = "apuesta" name='apuesta' onChange={(e) =>handleChange(e)} />
            <input type='text'  placeholder = "tus numeros" name='numeros' onChange={(e) =>handleChange(e)} />
            <button >
             Create
             </button>  
            </form> 
  </div>
            <div className={styles.footer}>
            <li>
                <ul>
                user Status
                </ul>
                <ul>
                    user Status
                </ul>
                <ul>
                    user Status
                </ul>
                <ul>
                    user Status
                </ul>
                <ul>
                    user Status
                </ul>
                <ul>
                    user Status
                </ul>
                <ul>
                    total
                </ul>
            </li>
                </div>      
        
    </div>
)
}
export default Create;