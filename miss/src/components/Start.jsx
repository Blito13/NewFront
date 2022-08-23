import styles from "./Start.module.css"
import DataTable from "react-data-table-component";
import data from "./data"


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
  
return (
    <div className={styles.table}>

  <DataTable
  columns={columns}
  striped
  pagination
  data = {data}
  >
  </DataTable>

  {/*   <table >
  <tr>
    <th>Name</th>
    <th>Decena de mil</th>
    <th>Unidad de mil</th>
    <th>Centena</th>
    <th>Decena</th>
    <th>Unidad</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>2</td>
    <td>7</td>
    <td>7</td>
    <td>7</td>
    <td>7</td>

  </tr>
  <tr>
    <td>Francisco Chang</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>4</td>
    <td>4</td>
  </tr>
</table> */}
    </div>
)
}
export default Start;