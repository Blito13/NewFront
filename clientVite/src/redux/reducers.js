import {
   GET_COE_NUMBERS ,
   GET_NUMBERS_PLAYER , 
   GET_PLAYERS_DB,
   GET_FINAL_RESULTS
  } from "./actions";  


const initialState = {
numberPlayer : [] ,
coeNumbers : [],
players : [],
finalResults : []

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
      case GET_FINAL_RESULTS :
         const results =  payload;
         return {
            ...state ,  finalResults : results
         };

               default:
            return state;
    }
};
export default rootReducer;