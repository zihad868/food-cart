import React, { useContext, useState } from "react";
import { CartContext } from "../../Provider/CartContext";
import { MdDelete } from "react-icons/md";

const OrderFood = ({ order }) => {
  const { removeCartItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(order?.price);

  const increaseQuantity = () => {
    setQuantity(quantity+1)
    setTotalPrice((quantity+1) * order.price)
  }

  const decreaseQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity-1)
      setTotalPrice((quantity-1) * order.price)
    }
  }

  return (
    <div className="mb-8 border-2 rounded-md p-3 relative">
      <div className="flex">
        <img className="h-[100px] w-[50%]" src={order?.image} alt="" />
        <div className="ml-2 space-y-1">
          <p className="text-white font-bold">{order?.name}</p>
          <p className="text-white">{order?.price}$ /each</p>
          <div className="flex">
            <button className="bg-gray-200 px-2" onClick={decreaseQuantity}>-</button>
            <p className="w-full flex justify-center bg-white">{quantity}</p>
            <button className="bg-gray-200 px-2" onClick={increaseQuantity}>+</button>
          </div>
          <div>
            <p className="text-white text-xl font-bold flex justify-end">
              {totalPrice}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 bg-white p-2 rounded-full cursor-pointer" onClick={() => removeCartItem(order.id)}>
        <MdDelete className="text-red-500 text-2xl" />
      </div>
    </div>
  );
};

export default OrderFood;