import React from "react";
import "./CartItem.css";
import PriceFormater from "./PriceFormater";
import { useStateValue } from "../Contexts/StateProvider";

function CartItem({ id, title, image, price, quantity }) {
  const [state, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        id: id,
      },
    });
  };
  const changeQuantity = (qty) => {
    dispatch({
      type: "CHANGE_ITEM_QTY",
      item: {
        id: id,
        quantity: qty,
      },
    });
  };

  return (
    <div className="cartItem">
      <img src={image} alt="" />
      <div className="cartItem__info">
        <h2>{title}</h2>
        <p>Em estoque</p>
        <small className="cartItem__gift">
          <input type="checkbox" /> Esse pedido contém um presente
        </small>
        <div className="cartItem__lastRow">
          <select
            name="Quantity"
            id=""
            defaultValue={quantity}
            onChange={(t) => {
              t.target.selectedIndex === 0
                ? removeFromCart()
                : changeQuantity(t.target.selectedIndex);
            }}
          >
            {Array(10)
              .fill()
              .map((_, idx) => {
                return (
                  <option
                    key={`qty__${idx}`}
                    // selected={idx === quantity ? true : false}
                    value={idx}
                  >{`Qtd: ${idx}`}</option>
                );
              })}
          </select>
          <span onClick={removeFromCart}>Excluir</span>
          <span>Salvar para mais tarde</span>
        </div>
      </div>
      <div className="cartItem__price">{<PriceFormater price={price} />}</div>
    </div>
  );
}

export default CartItem;
