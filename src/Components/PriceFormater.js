import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function PriceFormater({ price }) {
  return (
    <div>
      <CurrencyFormat
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
      />
    </div>
  );
}

export default PriceFormater;
