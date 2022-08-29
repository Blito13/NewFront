import {useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";


const FilterWinners = ({data}) => {
    const actuales = useSelector(state=> state.players)
    console.log(actuales)
    console.log(data)
    const sonaja = actuales.filter(e => e.unidad == data[4] && e.decena == data[3] && e.centena == data[2])

    console.log(sonaja)
    return(
        <div>
            <h1>
                <ul>
                {
                    data.map(e => <div>{e}</div>)
                }
                ganadores 1 aciertos
                ganadores 2 aciertos
                ganadores 3 aciertos
                ganadores 4 aciertos
                ganadores totales 
                    </ul>
                </h1>
        </div>
    )

}
export default FilterWinners