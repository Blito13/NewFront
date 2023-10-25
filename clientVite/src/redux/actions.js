import axios from "axios";
export const GET_COE_NUMBERS = "GET_COE_NUMBERS";
export const GET_NUMBERS_PLAYER = "GET_NUMBERS_PLAYER";
export const GET_PLAYERS_DB = "GET_PLAYERS_DB";

export const getPlayersDb = () => {
    return async function (dispatch){
        try{
            await  axios.get("/getplayers").then ((json )=> 
            {
                dispatch({
                    type : "GET_PLAYERS_DB",
                    payload : json.data
                })
                console.log(json.data)
            })
        }
        catch(error){
            console.log(error)
        }
    }
};
export const getCoeNumbers  = () => {
    return async function (dispatch){
        try{
            await  axios.get("/average").then ((json )=> 
            {
                dispatch({
                    type : "GET_COE_NUMBERS",
                    payload : json.data
                })
                console.log(json.data)
            })
        }
        catch(error){
            console.log(error)
        }
    }
};
export const getUserNumbers = (number) => {
    return async function (dispatch){
        try{
            await  axios.post("/expected",number).then ((json )=> 
            {
                dispatch({
                    type : "GET_NUMBERS_PLAYER",
                    payload : json.data
                })
                console.log(json.data);
            })
        }
        catch(error){
            console.log(error)
        }
    }
};
/* export function postGame (payload){
    return async function(dispatch){
        try{

            var json = await axios.post("/create",payload)
            console.log(json)
            return dispatch({json});
        }catch (error){
            console.log(error)
        }
    } 
    
};
export function getLoged  (payload)  {
    return async function(dispatch){
        try{

            var json = await axios.post("/login",payload)
            console.log(json.data)
            return dispatch({
                type: "GET_USER_STATE",
                payload : json.data
                
            });
        }catch (error){
            console.log(error)
        }
    } 
}
export function getLogedStatus   ( payload) {
    

            return {
                type : "GET_LOGED",
                payload :payload
            }
       
}
                
export function logUser (payload){
    return async function(dispatch){
        try{

            var json = await axios.post("/login",payload)
            console.log(json)
            return dispatch({
                type: "LOG_USER",
                payload :json.data
            });
        }catch (error){
            console.log(error)
        }
    } 
} */