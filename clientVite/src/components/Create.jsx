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
        nombre : "",
        apuesta : 0,
        numero :[0,0,0,0,0],
    });
 
    useEffect(() => {
        // Verificar si el usuario está autenticado al cargar el componente
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(isLoggedIn, "motumbo");
       
      }, []);
  const handleChange = (index, valor) => {
   // Validar que el valor esté entre 0 y 9
   if(index) {
     const {nombre , apuesta , numero} =  input;
     if (valor < 0 || valor > 9 || isNaN(valor)) {
       return; 
      }
      
      
      numero[index] = parseInt(valor, 10); 
      setInput({
        ...input,
        numero : numero
      }); 
      console.log(input);
      
    }else {
    const {name , value} =  value.target;
    setInput({
      ...input,
      [name] : value
    })
   }
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
      {input.numero.map((numero, index) => ( /* aca cambia */
        <div key={index}>
          <button onClick={() => handleChange(index, numero -1)}>-</button>
          <input
            type="number"
            name = "numero"
            value={numero}
            onChange={(e) => handleChange(index, e)}
            min={0}
            max={9}
          />
          <button onClick={() => handleChange(index, numero +1)}>+</button>
        </div>
      ))}
            <input type='text'  placeholder = "nombre" name='name' onChange={(e) =>handleChange(e)} />
            <input type='number'  placeholder = "apuesta" name='apuesta' onChange={(e) =>handleChange(e)} />
      <button type="submit">Guardar</button>
   </form>
     </div>
            <div className={styles.footer}>
            <h1>Footer</h1>
                </div>      
        
    </div>
)
}
export default Create;