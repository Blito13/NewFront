import { GET_PLAYERS} from "../actions/actions";  
/* import data from "../components/data" */

const initialState = {
players : [] ,
ganadores : []

}


export default function rootReducer (state = initialState , {payload , type} ){
    switch(type) {
      case GET_PLAYERS : 
        const data = payload
        console.log(data)
        return {...state , players: data } 
               
               default:
            return state;
    }
}