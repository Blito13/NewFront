import React from 'react';

const PredictionTable = () => {
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
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>x</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Prediccion parcial por cifra</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>y</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Predicción total por cifra</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>z</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Prediccion total de ganancias</td>
            <td></td> 
            <td></td>
            <td></td>
            <td></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Valor 2</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: '10px' }}>
        <div>Tu ganancia</div>
        <input type="text" placeholder="Input 1" style={{ flex: 1, padding: '8px' }} />
        <input type="text" placeholder="Input 2" style={{ flex: 1, padding: '8px' }} />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ padding: '10px 20px' }}>Guardar</button>
        <button style={{ padding: '10px 20px' }}>Apostar</button>
      </div>
    </div>
  );
};

export default PredictionTable;