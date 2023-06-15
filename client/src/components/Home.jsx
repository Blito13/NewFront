import React from "react";
import LogIn from "./LogIn";
import styles from './Home.module.css';
import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { getLoged, getLogedStatus } from "../redux/actions";

function Home () {
    const dispatch = useDispatch();
    const token =  useSelector(state => state.token);
    console.log(token);
    useEffect(()=>{
        return () =>{

            dispatch(getLogedStatus(token));
        }
    },[dispatch])

    return(
        
      <div className={styles.container}>
      <div className={styles.marquee}>
        <span><b>3,588.39</b></span>
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
    )
} 
export default Home;