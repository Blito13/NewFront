import {GET_COE_NUMBERS ,
   GET_NUMBERS_PLAYER , 
  } from "./actions";  


const initialState = {
numberPlayer : [] ,
coeNumbers : [],

//hay que usar useffect para darl las dependencias correspondientes para que consuman de la copia del estado
}


 function rootReducer (state = initialState , {payload , type} ){
    switch(type) {
      
      case GET_NUMBERS_PLAYER: 
      const data = payload;
        return {...state , 
         numberPlayer: data
         }; 

      case GET_COE_NUMBERS :
         const dats =  payload;
         return {
            ...state ,  coeNumbers : dats
         }

               default:
            return state;
    }
};
export default rootReducer;