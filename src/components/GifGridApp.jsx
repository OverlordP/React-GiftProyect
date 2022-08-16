import React, { useEffect, useState } from "react";
import { getGif } from "../helpers/Getgifs";
import Giftitem from "./Giftitem";

function GifGridApp({ categoria }) {

    const [lista, setlista] = useState([])

    
    const añadiendo = async ()=>{
        const newlista = await  getGif(categoria)
        setlista(newlista)
    }

    useEffect(() => {
        añadiendo()
      }, [ ])
  
  return (
    <>
      <h2>{categoria}</h2>

      <div className="card-grid"> {lista.map((e)=>(<Giftitem key={e.id}  {...e}/>))}</div>
       
     
    </>
  );
}

export default GifGridApp;
