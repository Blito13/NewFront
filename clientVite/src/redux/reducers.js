import {GET_COE_NUMBERS ,
   GET_NUMBERS_PLAYER , 
   GET_PLAYERS_DB,
  } from "./actions";  


const initialState = {
numberPlayer : [] ,
coeNumbers : [],
players : []

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
         };
      case GET_PLAYERS_DB :
         const players =  payload;
         return {
            ...state ,  players : players
         };

               default:
            return state;
    }
};
export default rootReducer;