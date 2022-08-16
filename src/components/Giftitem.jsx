import React from "react";

const Giftitem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt="cargando imagen" />
      <p>{title}</p>
    </div>
  );
};

export default Giftitem;
