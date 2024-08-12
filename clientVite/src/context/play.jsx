import { useReducer ,  createContext } from "react";
import {playReducer , playInitialState} from '../reducers/playReducer.js';
import axios from 'axios';
export const PlayContext = createContext();

function useCartReducer (){
    const [state , dispatch] = useReducer(playReducer,playInitialState);

    const addToCart  = product => dispatch({
        type:'ADD_TO_CART',
        payload : product
    })
    const removeFromCart = product => dispatch({
        type:'REMOVE_FROM_CART',
        payload : product
    })
    const sendForm = form => { 
       console.log(form);
       /*  const whatsappLink = `whatsapp://send?phone=${import.meta.env.VITE_APP_NMBR}&text=${encodeURIComponent(form)}`;
        window.location.href = whatsappLink; */
        /* dispatch({type : 'CLEAR_CART'}) */
    }
    const getTotal = () => dispatch({
        type: 'TOTAL_PRICE',
    })

    const clearCart = () => dispatch({type : 'CLEAR_CART'})
    return {state , addToCart ,removeFromCart , clearCart ,sendForm ,getTotal} 
}

export function PlayProvider ({children}) {
    const {state ,addToCart ,removeFromCart , clearCart , sendForm ,getTotal} = useCartReducer();
    
    return (
        <PlayContext.Provider value = {{
            play : state,
            addToCart,
            removeFromCart,
            clearCart,
            sendForm,
            getTotal
        }}>
            {children}
        </PlayContext.Provider>
    )
}