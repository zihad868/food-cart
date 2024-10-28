import React, { useEffect, useState } from "react";
import FoodDetails from "./FoodDetails";

const FoodCart = () => {
  const [foods, setFoods] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetch("./cart.json")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);

  return (
    <div
      className="grid md:grid-cols-3 mt-20
     w-[60%] ml-32 gap-5"
    >
      {foods.map((food) => (
        <FoodDetails key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodCart;
