import React, { useState } from "react";
import DataTableComponent from "./DataTableComponent";
import DataNumbersComponent from "./DataNumbersComponent";
import DataPlayersComponent from "./DataPlayersComponent";
import styles from './Home.module.css';
import { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getCoeNumbers , getUserNumbers , getPlayersDb} from "../redux/actions";
import dados from "../img/dados.jpg";
import fichas from "../img/fichas.jpg";
import flyMoney from "../img/moneda.jpg";
import moneda from "../img/numbers.jpg";
function Home () {
   
    const dispatch = useDispatch();
    const images = [dados , fichas , flyMoney ,moneda ];
    const [item ,setItem] = useState(null);
    const beData = useSelector(state => state.coeNumbers);
    const bePlayers = useSelector(state => state.players);
    const beNumbers = useSelector(state => state.numberPlayer);
  console.log(bePlayers)
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
      <div className={styles.datalist}>
     <DataNumbersComponent />
      </div>
      <div className={styles.datalist}>
     <DataTableComponent beData ={beData} />
      </div>
      <div className={styles.datalist}>
     <DataPlayersComponent beData ={bePlayers} />
      </div>
    </div>
    )
} 
export default Home;