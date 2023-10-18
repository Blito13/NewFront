import axios from "axios";
import data from "../components/data2.js"
export const GET_PLAYERS = "GET_PLAYERS";
export const GET_LOGED = "GET_LOGED";
export const LOG_USER = "LOG_USER";
export const GET_USER_STATE = "GET_USER_STATE";
export const getPlayers  = () => {
    return async function (dispatch){
        try{
            await  axios.get("/average").then ((json )=> 
            {
                dispatch({
                    type : "GET_PLAYERS",
                    payload : json.data
                })
                console.log(json.data)
            })
        }
        catch(error){
            console.log(error)
        }
    }
}
export const getUserState = () => {
    console.log( "aca chango")
    return{
        type : GET_USER_STATE,
        
    }
}
export function postGame (payload){
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
}