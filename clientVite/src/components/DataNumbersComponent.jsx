import * as React from "react";
import styles from "./DataTable.module.css";
import { useSelector , useDispatch} from "react-redux";
import { useState } from "react";
import { getUserNumbers} from "../redux/actions";


const numeros = [0,1,2,3,4,5,6,7,8,9];

export const DataNumbersComponent = () => {
    const results = useSelector(state => state.numberPlayer);
    const dispatch = useDispatch();
    const [number ,setNumber] = useState([]);
    const handleChange =(e) => {
        const {value , name } = e.target;
        setNumber(value);
        console.log(number);
    };

    const handleSubmit = () =>{
      const piece = Array.from(number);
      let ref = piece.map(e => parseFloat(e));
        dispatch(getUserNumbers({numero:ref}));
    };

    return (
      <div className={styles.container}>
        <input type="number" onChange={(e)=>handleChange(e)}/>
        <button onClick={handleSubmit}>calcular</button>
      <table className={styles.table}>
      <thead>
        <tr>
          <th>Coeficent of number :</th>
          <th>Cifra</th>
          <th>Total</th>
          <th>Parcial</th>
       
        </tr>
      </thead>
      <tbody>
        {results.length > 0?
        results.map((item, index) => (
          <tr> 
            <td  className  = {styles.item}>{item.number}</td>
            <td  className  = {styles.item}>{item.figure}</td>
            <td  className  = {styles.item} >{item.total}</td>
            <td  className  = {styles.item}>{item.individual}</td>

          </tr>
        )
        )
        :
        <div>
        <tr>no results yet</tr>
        </div>
    }
      </tbody>
    </table>
    </div>
    )
    };
export default DataNumbersComponent;
