import axios from "axios";
export const GET_COE_NUMBERS = "GET_COE_NUMBERS";
export const GET_NUMBERS_PLAYER = "GET_NUMBERS_PLAYER";
export const GET_PLAYERS_DB = "GET_PLAYERS_DB";
export const GET_FINAL_RESULTS = "GET_FINAL_RESULTS";

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
export const getResults = (number) => {
    return async function (dispatch){
        try{
            await  axios.get("/finalResults",number).then ((json )=> 
            {
                dispatch({
                    type : "GET_FINAL_RESULTS",
                    payload : json.data
                })
                console.log(json.data , "SKIBIRI");
            })
        }
        catch(error){
            console.log(error)
        }
    }
};
