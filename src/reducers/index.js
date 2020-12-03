const initialState = {
  mealList: [{
    "strMeal": "Apple & Blackberry Crumble",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    "idMeal": "52893",
    "price": 80
  },
  {
    "strMeal": "Apple Frangipan Tart",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    "idMeal": "52768",
    "price": 84
  }]
}

function filter(state = initialState, action) {
  switch (action.type) {
    case "FILTER":
      return {state: state}
    default:
      break;
  }
  return state
}

export default filter