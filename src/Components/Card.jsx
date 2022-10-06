import React from "react";
import CartItem from "././CardItem";
export const Card = (props) => {
  const { products } = props;
  return (
    <div className="cart" id="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};
