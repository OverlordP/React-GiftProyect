import React, { useState } from "react";

const AddCategoriaApp = ({añadir}) => {
  const [anime, setanime] = useState("");

  const onAddchange = (action) => {
    setanime(action);
  };

  const onsumi=(e)=>{
    e.preventDefault();
    if (anime.trim().length <=1) return;
    añadir(anime);

    setanime('');
  }
  return (
    <form onSubmit={(e)=>onsumi(e)}>
      {" "}
      <h1>GiftExpertApp</h1>
      <p>
        <label>Ingrese Anime: </label>
        <input
          id="ani"
          type="text"
          onChange={(e) => {
            onAddchange(e.target.value);
          }}
          value={anime}
          placeholder="Ingrese Anime"
        />
      </p>
    </form>
  );
};

export default AddCategoriaApp;
