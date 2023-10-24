import * as React from "react";
import styles from "./DataTable.module.css";



const numeros = [0,1,2,3,4,5,6,7,8,9];

export const DataTableComponent = ({beData}) => {


    return (
      <div className={styles.container}>
      <table className={styles.table}>
      <thead>
        <tr>
          <th>Numero</th>
          <th>Decena de Mil</th>
          <th>Unidad de Mil</th>
          <th>Centena</th>
          <th>Decena</th>
          <th>Unidad</th>
        </tr>
      </thead>
      <tbody>
        {beData.map((item, index) => (
          <tr> 
          <td  >{numeros[index]}</td> 
            <td  className  = {styles.item}>{item.decenaDeMil}</td>
            <td  className  = {styles.item} >{item.unidadDeMil}</td>
            <td  className  = {styles.item}>{item.centena}</td>
            <td  className  = {styles.item}>{item.decena}</td>
            <td  className  = {styles.item}>{item.unidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
    };
export default DataTableComponent;
