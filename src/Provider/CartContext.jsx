import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvder = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        // Check if the item already exists in the cart
        const itemExists = cartItems.some(cartItem => cartItem.id === item.id);
        
        if (!itemExists) {
            setCartItems([...cartItems, item]); // Add only if the item doesn't exist
        }
    };
     

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