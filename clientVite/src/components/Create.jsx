import React, { useState ,useEffect } from "react";
import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import {postGame} from "../redux/actions";
import {validate} from "../Utils"
import {motion}  from 'framer-motion';

const Create = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    apuesta: "",
    numeros: [0, 0, 0, 0, 0],
  });

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    if (name === "name" || name === "apuesta") {
      setInput({
        ...input,
        [name]: value,
      });
    } else {
      const newNumeros = [...input.numeros];
      if (name === "sumar") {
        newNumeros[index] = newNumeros[index] < 9 ? newNumeros[index] + 1 : 9;
      } else if (name === "restar") {
        newNumeros[index] = newNumeros[index] > 0 ? newNumeros[index] - 1 : 0;
      } else {
        newNumeros[index] =
          value >= 0 && value <= 9 ? parseInt(value) : input.numeros[index];
      }
      setInput({
        ...input,
        numeros: newNumeros,
      });
    }
    console.log(input)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postGame(input))
    console.log(input);
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.head}>
        <form onSubmit={handleSubmit}>
          {input.numeros.map((numero, index) => (
            <div key={index}>
              <button
                name="restar"
                onClick={(e) => handleChange(index, e)}
                disabled={numero === 0}
              >
              </button>
              <input
                type="number"
                name={index.toString()}
                value={numero}
                onChange={(e) => handleChange(index, e)}
                min={0}
                max={9}
              />
              <button
                name="sumar"
                onClick={(e) => handleChange(index, e)}
                disabled={numero === 9}
              >
                +
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="nombre"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(null, e)}
          />
          <input
            type="number"
            placeholder="apuesta"
            name="apuesta"
            value={input.apuesta}
            onChange={(e) => handleChange(null, e)}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default Create;