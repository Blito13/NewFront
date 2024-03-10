import React from "react";
import styles from "./Create.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import {postGame} from "../redux/actions"; */
import {validate} from "../Utils"
import {motion}  from 'framer-motion';
const Create = () => {
    const dispatch = useDispatch();
 
    const [user , setUser] = useState(''); 
    const [estimado , setEstimado]= useState('');
    const [error, setError] = useState({});
    const [numeros, setNumeros] = useState([0, 0, 0, 0, 0]); /* aca cambia */
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
  const handleChange = (index, value) => {
   // Validar que el valor esté entre 0 y 9
    if (value < 0 || value > 9 || isNaN(value)) {
      return; // No hacer nada si el valor no está en el rango permitido
    }
    const newNumeros = [...numeros];
    newNumeros[index] = parseInt(value, 10); // Convertir a número entero
    setNumeros(newNumeros)  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que quieras con el array de números
    console.log(numeros);
  };
    const variants = {
        odd : {
            backgroundColor :'#333',
            color: '#fff'
        },
        even:{
            backgroundColor : '#fff',
            color :'#000'
        }
    }
return (
    <div className={styles.contenedor}>
     <div className={styles.head}>
        <form onSubmit={handleSubmit}>
      {numeros.map((numero, index) => ( /* aca cambia */
        <div key={index}>
          <button onClick={() => handleChange(index, numero -1)}>-</button>
          <input
            type="number"
            value={numero}
            onChange={(e) => handleChange(index, e.target.value)}
            min={0}
            max={9}
          />
          <button onClick={() => handleChange(index, numero +1)}>+</button>
        </div>
      ))}
      <button type="submit">Guardar</button>
   </form>
     </div>
  <div className={styles.form}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text'  placeholder = "nombre" name='name' onChange={(e) =>handleChange(e)} />
            <input type='number'  placeholder = "apuesta" name='apuesta' onChange={(e) =>handleChange(e)} />
            <input type='text'  placeholder = "tus numeros" name='numeros' onChange={(e) =>handleChange(e)} />
            </form> 
  </div>
            <div className={styles.footer}>
            <h1>Footer</h1>
                </div>      
        
    </div>
)
}
export default Create;