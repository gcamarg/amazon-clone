import React from "react";
import "./Card.css";

function Card({ arr }) {
  return (
    <div className="card">
      <div className="card__title">
        <h2>Navegue por loja</h2>
      </div>
      <div className="card__body">
        <div className="card__row1">
          <img src={arr[0].image} alt="" />
          <img src={arr[1].image} alt="" />
        </div>
        <div className="card__row1">
          <img src={arr[2].image} alt="" />
          <img src={arr[3].image} alt="" />
        </div>
      </div>
      <div className="card__footer">
        <a href="/#">Veja mais</a>
      </div>
    </div>
  );
}

export default Card;
