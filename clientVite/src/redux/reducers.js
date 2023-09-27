
import {GET_PLAYERS ,
   GET_LOGED , 
   LOG_USER 
   ,GET_USER_STATE
  } from "./actions";  
/* import data from "../components/data" */

const initialState = {
players : [] ,
ganadores : [],
user : [],
loged : '',
token : ''
//hay que usar useffect para darl las dependencias correspondientes para que consuman de la copia del estado
}


 function rootReducer (state = initialState , {payload , type} ){
    switch(type) {
      case GET_USER_STATE: 
      //si no tengo data devolver el estado previo
     
      const data = payload.token;
      const stat = state.loged;
   
    console.log(data);
    /* if (!data) return  */
        return {...state , 
        loged : true,
        token : data
         }; 

      case GET_LOGED : 
      const token =  payload;
      const prev = state.token;
      console.log(prev , "make me crazy");
      return {...state , token : prev};
      
      case GET_PLAYERS :
         const players =  payload;
         console.log(players);
         return {
            ...state ,  players : payload 
         }

               default:
            return state;
    }
};
export default rootReducer;