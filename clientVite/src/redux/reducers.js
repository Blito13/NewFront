import {
   GET_COE_NUMBERS ,
   GET_NUMBERS_PLAYER , 
   GET_PLAYERS_DB,
   GET_FINAL_RESULTS,
   POST_PLAYER_GAME,
   EDIT_PLAYER_GAME,
   DELETE_PLAYER_GAME
  } from "./actions";  


const initialState = {
numberPlayer : [] ,
coeNumbers : [],
players : [],
finalResults : [],
number : {numero : [2, 2, 3, 4, 5]},
statePost: [],
stateEdit : [],
stateDelete :[]
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
      case POST_PLAYER_GAME :
         const resp =  payload;
         return {
            ...state , statePost : resp
         };
      case EDIT_PLAYER_GAME :
         const result =  payload;
         return {
            ...state , stateEdit : result
         };
      case DELETE_PLAYER_GAME :
         const response =  payload;
         return {
            ...state , stateDelete : response
         };

               default:
            return state;
    }
};
export default rootReducer;