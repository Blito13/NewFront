import React , { useEffect, useState } from 'react';

import NumbersComponent from './NumbersComponent';
import { usePlay } from '../hooks/usePlay';
const InstantPlayComponent = () => {
  const { play, clearCart, addToCart, sendCart, getTotal, sendForm } = usePlay();
  console.log(play.play.results[0].numberWinner);
let singlePlayResults = [3,3,4,5,6,7,8,9,9]

  const [number , setNumber] = useState({
     arx1 :[],
     arx2 :[],
     arx3 :[]});
  const [apuesta , setApuesta] = useState(0);
  const [colors ,  setColors] = useState("yes");
  const [numberWi , setnumberWi] =  useState([]);
  console.log(number)
  const handleChange = (e) => {
  };
  const handleChangeApuesta = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      console.log(typeof value)
      const ref = Array.from(value).map((e) => parseFloat(e));
    
      setNumber((prevNumber) => ({ 
        ...prevNumber,
        [name]: ref
      }));
  
      console.log(number);
    
  };
  const playGame = (e) => {
    e.preventDefault();
    let form = {
      playerNumbers : number,
      playerGamble : apuesta
    };
    sendForm(form)
  }; 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <NumbersComponent
      numbers = {play?play.play.results[0].numberWinner : ["*","*","*","*","*"] }/* {Object.keys(singlePlayResults).length>0?singlePlayResults.response.numberWinner : ["*","*","*"]} */
      message = {/* play?play.play.results: */"ñaña"}/* {Object.keys(singlePlayResults).length>0?singlePlayResults.response.message : null} */
      ></NumbersComponent>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th></th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Decena de mil</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Unidad de mil</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Centena</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Decena</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Unidad</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Coincidencias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>1er Numero</td>
            {number ?number.arx1.map((e , i ) => 
              <td  style={e !== numberWi[i]  ?{ border: '1px solid black', padding: '8px' }: {backgroundColor :"gold" , border : '3px solid orange' , padding : '8px'}}>{e}</td>
            ) : null}
            <td>{play?play.play.results[0].message : "goodluck"}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>2er Numero</td>
            {number ?number.arx2.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e}</td>
            ) : null}
            <td>{play?play.play.results[1].message : "goodluck"}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>3er Numero</td>
            {number ?number.arx3.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e}</td>
            ) : null}
            <td>{play?play.play.results[2].message : "goodluck"}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Prediccion total de ganancias</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: 'flex', width :"25%" ,gap :"56px" }}>
        <form onSubmit={playGame}>
        <input type="number" placeholder="1er Numero" name ="arx1" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="number" placeholder="2do Numero" name ="arx2" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="number" placeholder="3er Numero" name ="arx3" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="text" placeholder="Apuesta" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChange(e)} />
        <button type="submit">PLAY</button>
        </form>
      </div>
    </div>
  );
};

export default InstantPlayComponent;