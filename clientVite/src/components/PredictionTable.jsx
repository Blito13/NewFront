import React , { useEffect, useState } from 'react';
import { getUserNumbers , getCoeNumbers } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const PredictionTable = () => {
  const results = useSelector(state => state.numberPlayer);
  const coeNumbers = useSelector(state => state.coeNumbers);
  let cypre = [...results];
 /*  arr.push(results) */
  console.log(cypre.reverse())
  console.log(coeNumbers)
  const [number , setNumber] = useState([]);
  const [apuesta , setApuesta] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(getCoeNumbers);
  } , [])
  const handleChange = (e) => {
    e.preventDefault();
    const {name , value} = e.target ;
    setNumber(value);
    console.log(number)
  };
  const handleChangeApuesta = (e) => {
    e.preventDefault();
    const {name , value} = e.target ;
    setApuesta(value);
    console.log(apuesta)
  };
  const gambleAnalize = () => {
  const piece = Array.from(number);
  let ref = piece.map(e => parseFloat(e));
      dispatch(getUserNumbers({numero:ref}));
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
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
            <td style={{ border: '1px solid black', padding: '8px' }}>Tus numeros</td>
            {cypre.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e.number}</td>

            )}
            {/* <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td> */}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Prediccion parcial por cifra</td>
            {cypre.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e.individual}</td>
            )}
            {/* <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td> */}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Predicción total por cifra</td>
            {cypre.map((e) => 
              <td  style={{ border: '1px solid black', padding: '8px' }}>{e.total}</td>
            )}
            {/* <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td> */}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Prediccion total de ganancias</td>
            <td></td> 
            <td></td>
            <td></td>
            <td></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{apuesta>0?apuesta * cypre[0].total : 0}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: '10px' }}>
        <div>Tu ganancia</div>
        <input type="text" placeholder="Tu apuesta" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChangeApuesta(e)} />
        <input type="text" placeholder="Tus numeros" style={{ flex: 1, padding: '8px' }} onChange={(e)=>handleChange(e)} />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ padding: '10px 20px' }} onClick={gambleAnalize}>Analizar Numeros</button>
        <button style={{ padding: '10px 20px' }}>Apostar</button>
      </div>
    </div>
  );
};

export default PredictionTable;