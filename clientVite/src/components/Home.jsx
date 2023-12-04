import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import styles from './Home.module.css';
import { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getCoeNumbers , getUserNumbers , getPlayersDb , getResults} from "../redux/actions";
import { coeColumns , coePlayerColumns} from "./tables";
import MyTable from "./MyTable";
function Home () {
  const results = useSelector(state => state.numberPlayer);
  const coeData = useSelector(state => state.coeNumbers);
  const allDataPlayers = useSelector(state => state.players);
  const finalResults = useSelector((state) => state.finalResults);
  const numberMock = useSelector((state) => state.number )
  console.log(coeData, "here at the fR" , numberMock , "adelaida")
  const [number ,setNumber] = useState([]);
  const handleChange =(e) => {
      const {value , name } = e.target;
      setNumber(value);
  };

  const handleSubmit = () =>{
    const piece = Array.from(number);
    let ref = piece.map(e => parseFloat(e));
   
      dispatch(getUserNumbers({numero:ref}));
  };
    const dispatch = useDispatch();

 
  
    useEffect(()=>{
      dispatch(getUserNumbers(numberMock));
      dispatch(getResults());
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
     <div >
    {/*   <DataTable
            columns={columnsCoeTable}
            data={coeData}
            customStyles = {customStyles}
            /> */}
         { finalResults.length > 0 ? ( <MyTable 
          columns = {coePlayerColumns} 
          data={results} 
          ></MyTable>)
        :(<h1>
          "carnalillos"
        </h1>)
        }
            </div>
            <div>
            <input  placeholder="type here" type="number" onChange={(e)=>handleChange(e)}/>
            <button onClick={handleSubmit}>calcular</button>
 {/*     <DataTable
            columns={dataNumbersPlayerCoeTable}
            data={results}
            customStyles = {customStyles}
            /> */}
            </div>
    </div>
    )
} 
export default Home;