import { act } from "@testing-library/react";
import { combineReducers } from "redux";
import {
  REQUEST_MEALS,
  RECEIVE_MEALS,
  FILTER_BY_PRICE,
  MEAL_SEARCH,
  ADD_TO_CART,
  DELETE_MEAL
} from "../actions";

function filterMeals(array, keyword) {
  return array.filter((meal) => {
    const regex = new RegExp(keyword, "gi");
    return meal.strMeal.match(regex);
  });
}

const initialState = {
  isFetching: false,
  meals: [],
  id: "",
};

function mealList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MEALS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_MEALS:
      return Object.assign({}, state, {
        isFetching: false,
        meals: action.payload,
      });

    default:
      return state;
  }
}

function visibilityAll(state = "ALL", action) {
  switch (action.type) {
    case FILTER_BY_PRICE:
      return action.payload;
    default:
      return state;
  }
}

function mealSearchId(state = null, action) {
  switch (action.type) {
    case MEAL_SEARCH:
      return action.payload;
    default:
      return state;
  }
}

function mealAddToCart(
  state = JSON.parse(localStorage.getItem("meals")) || [],
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state, action.payload);
      return exist(state, action.payload);
    case DELETE_MEAL:
      console.log(action.payload, state)
      return deleteMeal(action.payload, state)
    default:
      return state;
  }
}

function exist(state, item) {
  const find = state.findIndex((meal) => meal.strMeal === item.strMeal);
  
  if (find === -1) {
    localStorage.setItem("meals", JSON.stringify([...state, item]));
    return [...state, item];
  } else {
    return state;
  }
}

function deleteMeal(id, array) {
  const resultDelete = array.filter(meal => meal.strMeal !== id)
  localStorage.setItem("meals", JSON.stringify(resultDelete))
  return resultDelete
}

const mealApp = combineReducers({
  mealList,
  visibilityAll,
  mealSearchId,
  mealAddToCart,
});

export default mealApp;
