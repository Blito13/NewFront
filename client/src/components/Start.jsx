import styles from "./Start.module.css"
import DataTable from "react-data-table-component";

import { Fragment } from "react";
import React, { useMemo } from "react";
import {useSelector , useDispatch} from "react-redux"
import { useEffect } from "react";
import FilterComponent from "./FilterComponent";
import FilterWin from "./FilterWin";
import { getPlayers } from "../redux/actions";
const Start = (props) => {
 const dispatch = useDispatch();
const numbers = [[6],[8],[6],[7],[3]]/* 
const data =  useSelector( state => state.players); */
const prueva =  useSelector((state => state.loged));
console.log(prueva)


  
return (
    <div className={styles.table}>
     hola
    </div>
)
}
export default Start;