import React from "react";

const Checkout = ({cartItem,totalPrice}) => {
  return (
    <div>
      <h2>Cart Item</h2>
      {cartItem.map((item) => {
        <p key={item.id}>
          {item.name}: {item.price} {item.currency}
        </p>;
      })}
      <p>Total Price: {totalPrice} USD</p>
    </div>
  );
};

export default Checkout;
