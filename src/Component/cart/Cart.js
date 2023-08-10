import React from "react";
import { IconButton, ButtonGroup } from "rsuite";
import { useCart } from "./Cart.Context";
import { Icon } from '@rsuite/icons';
import { FaCartShopping } from 'react-icons/fa6'; 


export const Cart = () => {

    const { storedCartItems, storedTotalPrice } = useCart();

    const CartItemCount = () => {
        const itemCountString = storedCartItems
          ? storedCartItems?.length > 99
            ? "99+"
            : "" + storedCartItems?.length
          : "0";
        return(
            <i style={{fontSize: '16px', width: 20, height: 20}}>{ itemCountString }</i>
        )
    }

    const CartTotalPrice = () => {
        const cartPriceString = storedTotalPrice
          ? "$" + storedTotalPrice
          : "Empty";
        return(
            cartPriceString
        )
    }

    const CartIcon = () => (
        <Icon as={ FaCartShopping } />
    );

    return (
      <ButtonGroup>
        <IconButton icon={<CartItemCount />} circle size="lg" />
        <IconButton icon={<CartIcon />} placement="right">
          <CartTotalPrice />
        </IconButton>
      </ButtonGroup>
    );

}

export default Cart;
