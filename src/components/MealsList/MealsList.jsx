import React from "react";
import Meal from "components/Meal/Meal";
import MealCart from "components/MealCart/MealCart";

const MealsList = ({ array, id }) => {
  if (id === "mealshome") {
    return array.map((meal) => <Meal key={meal.strMeal} itemMeal={meal} />);
  } else {
    return array.map((meal) => (
      <MealCart key={meal.strMeal} id={meal.idMeal} itemMeal={meal} />
    ));
  }
};

export default MealsList;
