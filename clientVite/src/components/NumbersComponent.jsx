import React, { useState } from 'react';
const NumbersComponent = ({numbers , message}) => {
 /*  const [numbers, setNumbers] = useState([]); */

  const generateNumbers = () => {
    const newNumbers = Array.from({ length:3 }, () => Math.floor(Math.random() * 10));
    setNumbers(newNumbers);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {numbers.map((number, index) => (
          <div key={index} style={{ fontSize: '48px', margin: '0 10px' }}>
            {number}
          </div>
        ))}
      </div>
        <div>
            <h1>
            {message}
            </h1>
        </div>
    </div>
  );
};

export default NumbersComponent;