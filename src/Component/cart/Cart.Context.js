import React, { createContext, useEffect, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [storedCartItems, setCartItems] = useState();
    const [storedTotalPrice, setTotalPrice] = useState();

    useEffect(() => {
      const cartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const cartTotalPrice =
        parseFloat(localStorage.getItem("totalPrice")) || 0;
      console.log("cartItems changed: ", cartItems);
      setCartItems(cartItems);
      setTotalPrice(cartTotalPrice);
    }, []);

    return (
      <CartContext.Provider value={{ storedCartItems, storedTotalPrice, setCartItems, setTotalPrice }}>
        {children}
      </CartContext.Provider>
    );

}

export const useCart = () => useContext(CartContext);

