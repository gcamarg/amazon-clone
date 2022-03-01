import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function PriceFormater({ price }) {
  return (
    <strong>
      <CurrencyFormat
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
      />
    </strong>
  );
}

export default PriceFormater;
