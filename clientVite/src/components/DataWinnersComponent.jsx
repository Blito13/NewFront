import * as React from "react";
import styles from "./DataTable.module.css";



const numeros = [0,1,2,3,4,5,6,7,8,9];

export const DataWinnersComponent = ({beData}) => {

   
    return (
      <div className={styles.container}>
      <table className={styles.table}>
      <thead>
        <tr>
          <th>Winner</th>
          <th>Apuesta</th>
          <th>Aciertos</th>
          <th>Decena de Mil</th>
          <th>Unidad de Mil</th>
          <th>Centena</th>
          <th>Decena</th>
          <th>Unidad</th>
        </tr>
      </thead>
      <tbody>
        {/* {beData.map((item, index) => (
          <tr> 
          <td>{item.name}</td> 
          <td>{item.bet}</td> 
            <td  className  = {styles.item}>{item.numero[0]}</td>
            <td  className  = {styles.item} >{item.numero[1]}</td>
            <td  className  = {styles.item}>{item.numero[2]}</td>
            <td  className  = {styles.item}>{item.numero[3]}</td>
            <td  className  = {styles.item}>{item.numero[4]}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
    </div>
    )
    };
export default DataWinnersComponent;
