import * as React from "react";
import styles from "./DataTable.module.css";



const numeros = [0,1,2,3,4,5,6,7,8,9];

export const DataTableComponent = ({ beData , rows , columns , data }) => {

console.log(data)
    return (
      <div className={styles.container}>
      <table className={styles.table}>
      <thead>
        
          {columns.map((item , index) => (
            <th>{item}</th>
          ))}
          {/* <th>Decena de Mil</th>
          <th>Unidad de Mil</th>
          <th>Centena</th>
          <th>Decena</th>
          <th>Unidad</th>  */}
        
      </thead>
      <tbody>
        <tr> 
          {rows.map((el) => (
            <tr>{el}</tr> 
          ))}
          {data.map((item, index) => (
          <tr>
            <td  className  = {styles.item}>{
              item[0]
            }
            </td>
            </tr>

           ))}
            </tr>
      </tbody>
    </table>
    </div>
    )
    };
export default DataTableComponent;
