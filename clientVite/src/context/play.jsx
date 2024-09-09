import { useReducer ,  createContext } from "react";
import {playReducer , playInitialState} from '../reducers/playReducer.js';
import axios from 'axios';
export const PlayContext = createContext();

function useCartReducer (){
    const [state , dispatch] = useReducer(playReducer,playInitialState);

    const sessionLogIn  = async (credentials) => {      
       await axios.post("/es/toc-toc" , credentials).then((json)=>
        {
           dispatch({
           type:'LOGIN_SESSION',
           payload : json
            })
        })
    };   
    const sendForm =async (form) => {
        let config = {
            headers: {
                "x-access-token": state.token
            }
        }
       console.log(state.token , "here bri");
       await  axios.post("/singlePlay",form, config).then ((json )=> 
            {
                dispatch({
                    type : "SINGLE_PLAY",
                    payload : json.data
                })
                console.log(json.data);
            })
    };
    const logOut = () => dispatch({type : 'CLEAR_STORE'});

    const update = async (id, newObject) => {
        const config = {
          headers: {
            "x-access-token": state.token
          }
        };
        const request =  await axios.put(`${baseUrl}/${id}`, newObject, config).then((resp)=>{
            dispatch({
                type:"UPDATE_PASS",
                payload : resp
            })
        })
      }
    return {state ,sendForm ,update , logOut ,sessionLogIn} 
}

export function PlayProvider ({children}) {
    const {state ,sendForm ,update , logOut ,sessionLogIn} = useCartReducer();
    
    return (
        <PlayContext.Provider value = {{
            play : state,
            sendForm,
            update,
            logOut,
            sessionLogIn
        }}>
            {children}
        </PlayContext.Provider>
    )
}