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
        numbers: "Numbers",
        selector: row => row.name,
        sortable: true,
        grow: 2
      },
      {
        name: "Name",
        selector: row => row.name,
        sortable: true,
        grow: 2
      },
      {
        name: "Email",
        selector: row => row.email,
        sortable: true,
        hide: "sm"
      },
      {
        name: "Website",
        selector: row => row.website ,
        sortable: true
      },
      {
        name: "Company",
        selector: row => row.company.name,
        sortable: true,
        hide: "md"
      },
      {
        name: "City",
        selector: row => row.address.city,
        sortable: true,
        hide: "md"
      },
      {
        name: "Buttons",
        button: true,
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