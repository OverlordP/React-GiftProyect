import React, { useState } from "react";

export const CounterApp = ({ conteo }) => {
  const [value, setvalue] = useState(conteo);

  const aumenta = () => {
    setvalue(conteo + value);
  };

  const disminuye = () => {
    setvalue(value - conteo);
  };

  const handlereset = () => {
    setvalue(conteo);
  };

  return (
    <>
      <div>{value}</div>

      <button onClick={() => aumenta()}> + 1</button>

      <button onClick={() => handlereset()}> reset</button>

      <button onClick={() => disminuye()}> -1 </button>
    </>
  );
};
