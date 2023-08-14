import React from "react";
import { IconButton, ButtonGroup } from "rsuite";
import { useCart } from "./Cart.Context";
import { Icon } from '@rsuite/icons';
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";


export const Cart = () => {

    const navigate = useNavigate();

    const redirectToCheckout = () => {
        navigate('/checkout');
    }

    const { storedCartItems, storedTotalPrice } = useCart();

    const CartItemCount = () => {
        const itemCount = storedCartItems?.reduce((count,item) => count += item.qty, 0);
        const itemCountString = storedCartItems
          ? itemCount > 99
            ? "99+"
            : "" + itemCount
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
      <ButtonGroup onClick={redirectToCheckout}>
        <IconButton icon={<CartItemCount />} circle size="lg" />
        <IconButton icon={<CartIcon />} placement="right">
          <CartTotalPrice />
        </IconButton>
      </ButtonGroup>
    );

}

export default Cart;
