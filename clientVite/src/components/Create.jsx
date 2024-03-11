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
        numero :[0,0,0,0,0],
    });
 
    useEffect(() => {
        // Verificar si el usuario está autenticado al cargar el componente
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(isLoggedIn, "motumbo");
       
      }, []);
  const handleChange = (index, e) => {
    const {name , value} = e.target;
    console.log(input)
    const {nombre , apuesta , numero} =  input;
    name === "sumar"? 
   (numero[index] +=1) &&
    setInput({
      ...input,
         numero 
    }):null;
    name === "restar"?
    setInput({
      ...input,
         numero :numero[index] -1

    }): /* fix this , plus operation still creating a new property */
    setInput({
      ...input,
      [name] : value
    })   
    console.log(input)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que quieras con el array de números
    console.log(input.numero);
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
          <button name="restar" onClick={(index ,e) => handleChange(index,e)}>-</button>
          <input
            type="number"
            value={numero}
            onChange={(index ,e) => handleChange(index, e)}
            min={0}
            max={9}
          />
          <button name = "sumar" onClick={(e) => handleChange(index,e)}>+</button>
        </div>
      ))}
            <input type='text'  placeholder = "nombre" name='name' onChange={(e) =>handleChange(null ,e)} />
            <input type='number'  placeholder = "apuesta" name='apuesta' onChange={(e) =>handleChange(null,e)} />

      <button type="submit">Guardar</button>
   </form>
     </div>
  <div className={styles.form}>
        <form onSubmit={(e) => handleSubmit(e)}>
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