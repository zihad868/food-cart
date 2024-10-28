// CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvder = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const addItem = (item) => {
        const itemExists = cartItems.some(cartItem => cartItem.id === item.id);
        if (!itemExists) {
            setCartItems([...cartItems, item]);
        }
        setIsDrawerOpen(true);
    };

    const removeCartItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);

    const cart = {
        cartItems, addItem, removeCartItem, isDrawerOpen, toggleDrawer, closeDrawer
    };

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );
};