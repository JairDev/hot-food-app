import React from "react";
import Meal from "components/Meal/Meal";
import MealCart from "components/MealCart/MealCart";

const MealsList = ({ array, onClick, classCart, id }) => {
  console.log(id);
  if (id === "mealshome") {
    return array.map((meal) => (
      <Meal
        key={meal.strMeal}
        name={meal.strMeal}
        mealSrc={meal.strMealThumb}
        price={meal.price}
        onClick={onClick}
        classCart={classCart}
      />
    ));
  } else {
    return array.map((meal) => (
      <MealCart
        key={meal.strMeal}
        name={meal.strMeal}
        mealSrc={meal.strMealThumb}
        price={meal.price}
        onClick={onClick}
        classCart={classCart}
      />
    ));
  }
};

export default MealsList;
