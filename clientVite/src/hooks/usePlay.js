import { useContext } from "react";
import { PlayContext } from "../context/play";
export const usePlay = () =>{
    const context = useContext(PlayContext);
    if(context === null){
        throw new Error('usePlay must be used within a playProvider')
    }
    return context  

}