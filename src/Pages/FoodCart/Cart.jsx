import React from 'react';

const Cart = ({food}) => {

    return (
        <div className=''>
            <img src={food?.image} alt="" />
        </div>
    );
};

export default Cart;