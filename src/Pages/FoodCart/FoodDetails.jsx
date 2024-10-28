import React from 'react';

const FoodDetails = ({food}) => {
    console.log(food)
    return (
        <div className='ml-10'>
            <img className='w-64 h-60' src={food?.image} alt="" />
        </div>
    );
};

export default FoodDetails;