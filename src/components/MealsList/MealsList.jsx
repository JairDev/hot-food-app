import React from "react";
import Meal from "components/Meal/Meal";
import MealCart from "components/MealCart/MealCart";

const MealsList = ({ array, onClick, onChange, classCart, id, onRemove}) => {
  // console.log(array)
  if (id === "mealshome") {
    return array.map((meal) => (
      <Meal
        key={meal.strMeal}
        name={meal.strMeal}
        mealSrc={meal.strMealThumb}
        price={meal.price}
        onClick={onClick}
        classCart={classCart}
        itemMeal={meal}
      />
    ));
  } else {
    return array.map((meal) => (
      <MealCart
        key={meal.strMeal}
        name={meal.strMeal}
        mealSrc={meal.strMealThumb}
        price={meal.price}
        qty={meal.qty}
        onClick={onClick}
        classCart={classCart}
        onChange={onChange}
        onRemove={onRemove}
        id={meal.idMeal}
        itemMeal={meal}
      />
    ));
  }
};

export default MealsList;
