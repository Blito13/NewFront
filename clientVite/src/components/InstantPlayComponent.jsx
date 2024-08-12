import React , { useEffect, useState } from 'react';

import NumbersComponent from './NumbersComponent';
import { usePlay } from '../hooks/usePlay';
const InstantPlayComponent = () => {
  const { play, clearCart, addToCart, sendCart, getTotal, sendForm } = usePlay();
  console.log(sendForm);
let singlePlayResults = [3,3,4,5,6,7,8,9,9]

  const [number , setNumber] = useState({
     arr1 :[],
     arr2 :[],
     arr3 :[]});
  const [apuesta , setApuesta] = useState(0);
  const [colors ,  setColors] = useState("yes");
  const [numberWi , setnumberWi] =  useState([6,9,8,7,5]);
  console.log(number)
  const handleChange = (e) => {
    e.preventDefault();
    const {name , value} = e.target ;
    const piece = Array.from(value);
    let ref = piece.map(e => parseFloat(e));
    setNumber({...number});
    number[`${name}`] =  value;
    console.log(number);
  };
  const handleChangeApuesta = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      const ref = Array.from(value).map((e) => parseFloat(e));

      setNumber((prevNumber) => ({
        ...prevNumber,
        [name]: ref
      }));
  
      console.log(number);
    
  };
  const playGame = (e) => {
    e.preventDefault();
    const piece = Array.from(number);
    let ref = piece.map(e => parseFloat(e));
    console.log(apuesta)
    let form = {
      playerNumber : ref,
      playerGamble : apuesta
    };
    console.log
    sendForm(form)
  }; 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <NumbersComponent
      numbers = {[5,6,2,1,5]}/* {Object.keys(singlePlayResults).length>0?singlePlayResults.response.numberWinner : ["*","*","*"]} */
      message = {[5,6,2,1,5]}/* {Object.keys(singlePlayResults).length>0?singlePlayResults.response.message : null} */
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
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>1er Numero</td>
            {number ?number.map((e , i ) => 
              <td  style={e !== numberWi[i]  ?{ border: '1px solid black', padding: '8px' }: {backgroundColor :"gold" , border : '3px solid orange' , padding : '8px'}}>{e}</td>
            ) : null}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>2er Numero</td>
            {number ?number.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e}</td>
            ) : null}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>3er Numero</td>
            {number ?number.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e}</td>
            ) : null}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Prediccion total de ganancias</td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
      <div style={{ display: 'flex', width :"25%" ,gap :"56px" }}>
        <form onSubmit={playGame}>
        <input type="text" placeholder="1er Numero" name ="arr1" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="text" placeholder="2do Numero" name ="arr2" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="text" placeholder="3er Numero" name ="arr3" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="text" placeholder="Apuesta" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChange(e)} />
        <button type="submit">PLAY</button>
        </form>
      </div>
    </div>
  );
};

export default InstantPlayComponent;