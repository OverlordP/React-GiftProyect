import React, { useState } from "react";
import AddCategoriaApp from "./components/AddCategoriaApp";
import GifGridApp from "./components/GifGridApp";

//Cp7SrqvYb079VqqAt2nKgSyqb09fw4JJ

export const GiftExpertApp = () => {
  const [animes, setanimes] = useState(["Pokemon", "Dragon Ball", "Phineas"]);

  const OnAddAnime = (e) => {
    if (animes.includes(e)) return;
    setanimes([...animes, e]);
  };

  return (
    <>
      <AddCategoriaApp añadir={(e) => OnAddAnime(e)} />
      {animes.map((categoria)=>(<GifGridApp key={categoria} categoria={categoria}/>))}
    </>
  );
};
