import React, { useContext } from "react";
import "./Basket.css";
import { ProductContext } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";

export default function Basket() {
  const { state } = useContext(ProductContext);

  return (
    <>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">Empty Cart! Please Select Items</span>
        </div>
      )}
    </>
  );
}
