import styles from "./Start.module.css"
import DataTable from "react-data-table-component";
import data from "./data"
import { Fragment } from "react";
import React, { useMemo } from "react";
import FilterComponent from "./FilterComponent";
const Start = (props) => {
 const flex  = data.map((e) => {
var newKeys = {

  DecenaDeMil : "",
  UnidadDeMil : "",
  Decena : "",
  Centena : "",
  Unidad :""
}
const finalResult =  Object.assign(e , newKeys)

}
)
 console.log(data)
 
 console.log(data)
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
        selector: row => row.DecenaDeMil,
        sortable: true,
        hide: "sm"
      },
      {
        name: "Unidad de Mil",
        selector: row => row.UnidadDeMil ,
        sortable: true
      },
      {
        name: "Centena",
        selector: row => row.Centena,
        sortable: true,
        hide: "md"
      },
      {
        name: "Decena",
        selector: row => row.Decena,
        sortable: true,
        hide: "md"
      },
      { name: "Unidad",
        selector: row => row.Unidad,
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
                Edit
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