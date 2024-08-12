export const singlePlayerPlay = (form) => {
    return async function (dispatch){
        try{
            await  axios.post("/singlePlay",form).then ((json )=> 
            {
                dispatch({
                    type : "SINGLE_PLAY",
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