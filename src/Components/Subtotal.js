import React from "react";
import PriceFormater from "./PriceFormater";
import "./Subtotal.css";

function Subtotal({ subtotal, nItems }) {
  return (
    <div className="subtotal">
      <p>
        Subtotal ({nItems} itens):
        <PriceFormater price={subtotal}></PriceFormater>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> Esse pedido contém um presente
      </small>

      <button className="subtotal__button">Fechar pedido</button>
    </div>
  );
}

export default Subtotal;
