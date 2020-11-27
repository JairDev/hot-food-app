import React from "react"
import Meal from "components/Meal/Meal"

const MealsList = ({array, onClick}) => {
  
  return (
    array.map(meal => <Meal 
      key={meal.strMeal} 
      name={meal.strMeal} 
      mealSrc={meal.strMealThumb} 
      price={meal.price}
      onClick={onClick}
    />)

  )
}

export default MealsList
