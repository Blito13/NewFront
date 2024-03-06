import React from "react";
import styles from "./Create.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import {postGame} from "../redux/actions"; */
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
    let cards = [,,,,];

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
    
 /*        dispatch(postGame(input)); */
        setInput({
            name : "",
            apuesta : 0,
            numeros : ""
           })
    }
return (
    <div className={styles.contenedor}>
     <div className={styles.head}>
         <form onSubmit={(e) => handleSubmit(e)}>
        {        
            [0,1,2,3,4].map(e=>
                
                <input className={styles.cards} type='number' min="0" max="9"  placeholder = "apuesta" name='apuesta' /* onChange={(e) =>handleChange(e)}  *//>
            )

        }
        </form>
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
            <h1>Footer</h1>
                </div>      
        
    </div>
)
}
export default Create;