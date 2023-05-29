import React from "react";
import styles from "./Create.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postGame} from "../redux/actions";
function validate (input){
    let error= {};
    if(!input.name){
        error.name = 'Name is required';
    }else if(!input.summary){
        error.summary = 'Summary is required';
    }else if(input.score < 0 || input.score > 10){
        error.score = 'The Score has to be lower or equal than 10'
    }
    return error;
}
const Create = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState({})
    const [input, setInput] = useState({
   name : "",
   apuesta : 0,
   numeros : ""
       
    });
    const cofia = useSelector(state => state.loged );
    console.log(cofia);
    const handleChange = (e) => {
        e.preventDefault();
        const {name , value} =  e.target;
        console.log(name , value)
        setInput({
            ...input,
            [name] : value
        })
        console.log(input)
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
        <form onSubmit={(e) => handleSubmit(e)}>
      
       
            <input type='text'  placeholder = "nombre" name='name' onChange={(e) =>handleChange(e)} />
            <input type='number'  placeholder = "apuesta" name='apuesta' onChange={(e) =>handleChange(e)} />
            <input type='text'  placeholder = "tus numeros" name='numeros' onChange={(e) =>handleChange(e)} />
            <button >
                                        Create</button>  
            </form>       
    </div>
)
}
export default Create