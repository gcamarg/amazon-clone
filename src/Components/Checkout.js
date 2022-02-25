import React from "react";
import CartItem from "./CartItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../Contexts/StateProvider";
import PriceFormater from "./PriceFormater";
import { getCartTotal } from "../Contexts/reducer";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  const nItems = cart.reduce(
    (previousVal, elem) => previousVal + elem.quantity,
    0
  );
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="cart__container">
          <h1>Carrinho de compras</h1>
          <div className="priceColumn">
            <p>Preço</p>
          </div>
          {cart.map((product) => {
            return (
              <CartItem
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
              />
            );
          })}
          <div className="left__subtotal">
            <p>Subtotal ({nItems} itens): </p>
            <strong>
              <PriceFormater price={getCartTotal(cart)} />
            </strong>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal subtotal={getCartTotal(cart)} nItems={nItems} />
      </div>
    </div>
  );
}

export default Checkout;
