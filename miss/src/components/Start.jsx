import styles from "./Start.module.css"



const Start = () => {
return (
    <div className={styles.table}>



    <table >
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
</table>
    </div>
)
}
export default Start;