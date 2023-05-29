import styles from "./Start.module.css"
import DataTable from "react-data-table-component";

import { Fragment } from "react";
import React, { useMemo } from "react";
import {useSelector , useDispatch} from "react-redux"
import { useEffect } from "react";
import FilterComponent from "./FilterComponent";
import FilterWin from "./FilterWin";
import { getPlayers } from "../actions/actions";
const Start = (props) => {
 const dispatch = useDispatch();
const numbers = [[6],[8],[6],[7],[3]];
const data =  useSelector( state => state.players)
console.log(data)
useEffect (()=>{

  dispatch(getPlayers())
  

},[])
    const columns = [
    
      {
        name: "Cantidad de aciertos",
        /* selector: row => row.name, */
        sortable: true,
        /* grow: 2 */
        
      },
      {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        /* grow: 2 */
      },
      {
        name: "Decena de mil",
        selector: row => row.decenaDeMil, 
        sortable: true,
        hide: "sm"
      },
      {
        name: "Unidad de Mil",
        selector: row => row.unidadDeMil ,
        sortable: true
      },
      {
        name: "Centena",
        selector: row => row.centena,
        sortable: true,
        hide: "md"
      },
      {
        name: "Decena",
        selector: row => row.decena,
        sortable: true,
        hide: "md"
      },
      { name: "Unidad",
        selector: row => row.unidad,
        sortable: true,
        hide: "md"
      },
      { name: "Total gamble",
        selector: row => row.unidad,
        sortable: true,
        hide: "md"
      },
      {
        name: "Buttons",
        button: true,
        grow : 2 ,
        cell: row =>
          row.showButtons ? (
            <>
              <button
                onClick={() => props.click(row.name)}
                style={{ marginRight: "5px" }}
              >
                OK
              </button>
              <button onClick={() => props.click(row.name)}>Delete</button>
            </>
          ) : null

      }
    ];
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = data.filter(
      item =>
        JSON.stringify(item)
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1
    );
  
    const subHeaderComponent = useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText("");
        }
      };
  
      return (
        
          
          <FilterComponent
            onFilter={e => setFilterText(e.target.value)}
            onClear={handleClear}
            filterText={filterText}

            />
        
      );
    }, [filterText, resetPaginationToggle]);
  
return (
    <div className={styles.table}>
     {/*  <div>
        <button onClick={e =>  newNumbers(e)}></button>
      </div> */}
      <Fragment>
      <FilterWin
      data = {numbers}/>
      </Fragment>
    
  <DataTable
  columns={columns}
  defaultSortField="name"
  striped
  pagination
  data = {filteredItems}
  subHeader
  subHeaderComponent = {subHeaderComponent}
  >
  </DataTable>
 
    </div>
)
}
export default Start;