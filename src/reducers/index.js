import { combineReducers } from "redux";

const initialState = {
  mealList: [
    {
      strMeal: "Apple & Blackberry Crumble",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
      idMeal: "52893",
      price: 80,
    },
    {
      strMeal: "Apple Frangipan Tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
      idMeal: "52768",
      price: 84,
    },
    {
      strMeal: "Bakewell tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
      idMeal: "52767",
      price: 88,
    },
    {
      strMeal: "Banana Pancakes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
      idMeal: "52855",
      price: 92,
    },
    {
      strMeal: "Battenberg Cake",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
      idMeal: "52894",
      price: 96,
    },
  ],
  mealCart: [],
};




function mealList(state = initialState, action) {
  switch (action.type) {
    case "FILTER":
      return state.mealList.filter((item) => item.price < 90)
  
    default:
      return state;
  }
}

function mealCart(state = [], action) {
  switch(action.type) {
    case "ADD_MEAL":
      return [...state, {strMeal: "Pollo", price:200}]
    default: 
      return state
  }
}

const todo = combineReducers({
  mealList,
  mealCart
})
console.log(initialState);

export default todo;
