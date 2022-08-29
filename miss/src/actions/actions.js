import axios from "axios";
import data from "../components/data2.js"
export const GET_PLAYERS = "GET_PLAYERS";

/* export const getPlayers  = () => {
    return async function (dispatch){
        try{
            await  axios.get("").then ((json )=> 
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
} */
export const getPlayers = () => {
    console.log(data)
    return{
        type : "GET_PLAYERS",
        payload : data
    }
}
