import React, { useState } from "react";
import LogIn from "./LogIn";
import styles from './Home.module.css';
import { useEffect  ,useRef} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getLoged, getLogedStatus } from "../redux/actions";

function Home () {
    const dispatch = useDispatch();
    const token =  useSelector(state => state.token);
    console.log(token);
    const numberOfBoxes = [4,4,3,2,5,6];
    const headerRef = useRef(0);
    const [item ,setItem] = useState(null);
    /* const [current ,setCurrent] = useState(null); */
    const moveFow = (e) =>{
      e.preventDefault()
      const {name ,value} =  e.target;
      let current = item;
      if (name === 'fow') {

     /*    setItem( item +1) */
        current = current +1 
      }
      else{
        
    /*     setItem( item -1) */
        current = current -1 
      } 
      setItem(current);
      const listNode = headerRef.current;
      
      const imgNode = listNode.querySelectorAll('div')[current];

      console.log(item);
      imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'end'
    });
  console.log(item ,"dlkasldka")
  } 
    useEffect(()=>{
        return () =>{

            dispatch(getLogedStatus(token));
        }
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
      <div className = {styles.buttons}>
        <button name = 'back' value={+1}  onClick={e=>moveFow(e)}>back</button>
        <button name ='fow'value={-1} onClick={e=>moveFow(e)}>fows</button>
      </div>
      <div className={styles.caruselConteiner} ref={headerRef}>
      <div className={styles.carusel}>0</div>
      <div className={styles.carusel}>1</div>
      <div className={styles.carusel}>2</div>
      <div className={styles.carusel}>3</div>
  
      </div>
    </div>
    )
} 
export default Home;