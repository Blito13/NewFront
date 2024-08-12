import React , { useEffect, useState } from 'react';

import NumbersComponent from './NumbersComponent';
import { usePlay } from '../hooks/usePlay';
const InstantPlayComponent = () => {
  const { play, clearCart, addToCart, sendCart, getTotal, sendForm } = usePlay();
  console.log(sendForm);
let singlePlayResults = [3,3,4,5,6,7,8,9,9]

  const [number , setNumber] = useState([4,6,9,7,5]);
  const [apuesta , setApuesta] = useState(0);
  const [colors ,  setColors] = useState("yes");
  const [numberWi , setnumberWi] =  useState([6,9,8,7,5]);

  const handleChange = (e) => {
    e.preventDefault();
    const {name , value} = e.target ;
    const piece = Array.from(value);
    let ref = piece.map(e => parseFloat(e));
    setNumber(ref);
    console.log(number);
  };
  const handleChangeApuesta = (e) => {
    e.preventDefault();
    const {name , value} = e.target ;
    setApuesta(value);
    console.log(apuesta)
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
    console.log("se esta ejecutando la funcion")
    dispatch(singlePlayerPlay(form))
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <NumbersComponent
      numbers = {Object.keys(singlePlayResults).length>0?singlePlayResults.response.numberWinner : ["*","*","*"]}
      message = {Object.keys(singlePlayResults).length>0?singlePlayResults.response.message : null}
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
          <tr>
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
          </tr>
        </tbody>
      </table>
      <div style={{ display: 'flex', width :"25%" ,gap :"56px" }}>
        <form onSubmit={playGame}>
        <input type="text" placeholder="Tu apuesta" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="text" placeholder="Tus numeros" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChange(e)} />
        <button type="submit">PLAY</button>
        </form>
      </div>
    </div>
  );
};

export default InstantPlayComponent;