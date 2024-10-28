import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvder = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item])
    }

    const removeCartItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }

    const cart = {
        cartItems, addItem, removeCartItem
    }

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}