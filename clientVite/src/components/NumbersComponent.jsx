import React, { useState } from 'react';
import InstantPlayComponent from './InstantPlayComponent';
const NumbersComponent = () => {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
    setNumbers(newNumbers);
  };

  return (
    <div>
      <button onClick={generateNumbers}>Generar Números</button>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {numbers.map((number, index) => (
          <div key={index} style={{ fontSize: '48px', margin: '0 10px' }}>
            {number}
          </div>
        ))}
      </div>
      <InstantPlayComponent></InstantPlayComponent>
    </div>
  );
};

export default NumbersComponent;