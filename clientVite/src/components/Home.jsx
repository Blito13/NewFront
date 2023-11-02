import React, { useState } from "react";

import DataTable from 'react-data-table-component';
import DataTableComponent from "./DataTableComponent";
import DataNumbersComponent from "./DataNumbersComponent";
import DataPlayersComponent from "./DataPlayersComponent";
import DataWinnersComponent from "./DataWinnersComponent";
import styles from './Home.module.css';
import { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getCoeNumbers , getUserNumbers , getPlayersDb} from "../redux/actions";

function Home () {
   const nmb = [0,1,2,3,4,5,6,7,8,9];
  const nmbr =  () => {
    return nmb.map(e => e);
  }
   

};
  const columns = [
    {
        name: 'Numeros',
        cell : nmb,
        sortable: true,
    },
    {
        name: 'Decena de mil',
        selector: row => row.decenaDeMil,
        sortable: true,
    },
    {
        name: 'Unidad de mil',
        selector: row => row.unidadDeMil,
        sortable: true,
    },
    {
        name: 'Centena',
        selector: row => row.centena,
        sortable: true,
    },
    {
        name: 'Decena',
        selector: row => row.decena,
        sortable: true,
    },
    {
        name: 'Unidad',
        selector: row => row.unidad,
        sortable: true,
    },
];

const data = [
   
]
    const dispatch = useDispatch();

  /*  const columns = ["Decena de mil" , "Unindad de mil" , "centena" , "decena" , "unidad"] */
    const [item ,setItem] = useState(null);
    const beData = useSelector(state => state.coeNumbers);
    const th = ["Decena de mil" , "Unidad de mil" , "Centena" , "Decena" , "Unidad"];
    const jj =  beData.map((e ) => {

      return [
        e.decenaDeMil?e.decenaDeMil:"no gamble",
        e.unidadDeMil?e.unidadDeMil :"no gamble",
        e.centena? e.centena : "no gamble",
        e.decena? e.decena : "no gamble",
        e.unidad? e.unidad : "no gamble"
      ];
    });
    console.log(jj)
    useEffect(()=>{
       
      
      dispatch(getPlayersDb());
      dispatch(getCoeNumbers());
          
      },[dispatch])

    return( 
        
      <div className={styles.container}>
        <div className={styles.scrollText}>
          <div className={styles.marquee}>
              <span>XRP<b>0.32</b></span>
              <span>ETH<b>116.36</b></span>
              <span>sdad<b>3,588.39</b></span>
              <span>EOS<b>2.44</b></span>
              <span>USDT<b>1.01</b></span>
              <span>LTC<b>32.61</b></span>
              <span>XLM<b>0.10</b></span>
              <span>TRX<b>0.03</b></span>
              <span>BSV<b>74.29</b></span>
              <span>ADA<b>0.04</b></span>
          </div>
          <div className={styles.marquee2}>
            <span>BTC<b>3,588.39</b></span>
            <span>XRP<b>0.32</b></span>
            <span>ETH<b>116.36</b></span>
            <span>EOS<b>2.44</b></span>
            <span>USDT<b>1.01</b></span>
            <span>LTC<b>32.61</b></span>
            <span>XLM<b>0.10</b></span>
            <span>TRX<b>0.03</b></span>
            <span>BSV<b>74.29</b></span>
            <span>ADA<b>0.04</b></span>
          </div>
      </div>
      
      <DataTable
            columns={columns}
            data={beData}
            />
      
    </div>
    )
} 
export default Home;