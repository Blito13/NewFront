import * as React from "react";
import styles from "./DataTable.module.css";



const numeros = [0,1,2,3,4,5,6,7,8,9];

export const DataTableComponent = ({tableHead ,tableData , dataBe}) => {

  
    return (
      <div className={styles.container}>
      <table className={styles.table}>
      <thead>

        {tableHead.map((item) => (
        <tr>
          <th>
            {item}
          </th>
            </tr>
        ))};
        {/* <tr>
          <th>Numero</th>
          <th>Decena de Mil</th>
          <th>Unidad de Mil</th>
          <th>Centena</th>
          <th>Decena</th>
          <th>Unidad</th>
        </tr> */}
      </thead>
        {tableData.map((item, index) => (
      <tbody>
            <tr> 
            <td>
            {item}
            </td>
            </tr>
          {/* <td  className  = {styles.item}>{item.decenaDeMil}</td>
          <td  className  = {styles.item} >{item.unidadDeMil}</td>
          <td  className  = {styles.item}>{item.centena}</td>
            <td  className  = {styles.item}>{item.decena}</td>
            <td  className  = {styles.item}>{item.unidad}</td> */}
       </tbody>
            ))}
    </table>
    </div>
    )
    };
export default DataTableComponent;
