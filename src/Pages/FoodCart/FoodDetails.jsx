// FoodDetails.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../Provider/CartContext';

const FoodDetails = ({ food }) => {
    const { addItem } = useContext(CartContext);

    return (
        <div className='ml-10 space-y-2'>
            <img className='w-64 h-60' src={food?.image} alt="" />
            <p className='text-xl font-bold'>{food?.name}</p>
            <p>{food?.price}$ <span>/each</span></p>
            <p className='mt-5'>{food?.description}</p>
            <button
                className='bg-red-600 text-white font-bold w-full px-2 py-1 rounded-md'
                onClick={() => addItem(food)} 
            >
                Add To Order
            </button>
            <button className='text-red-500 w-full border-red-400 border-2 rounded-md px-2 py-1'>Customized</button>
        </div>
    );
};

export default FoodDetails;
