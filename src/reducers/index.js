import { combineReducers } from "redux";

import {
  REQUEST_MEALS,
  RECEIVE_MEALS,
  FILTER_BY_PRICE,
  MEAL_SEARCH,
  ADD_TO_CART,
  DELETE_MEAL,
  QUANTITY,
  UPDATE_QTY,
} from "../actions";
import { setLocal } from "utils/localStorage";
import { setCart } from "utils/setCart";
import { deleteMeal } from "utils/deleteMeal";

const cartArr = JSON.parse(localStorage.getItem("meals")) || [];

const initialState = {
  isFetching: false,
  meals: [],
  mealSearchId: null,
  visibilityAll: "ALL",
};

function mealList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MEALS:
      return { ...state, isFetching: true };
    case RECEIVE_MEALS:
      return {
        ...state,
        isFetching: false,
        meals: action.payload,
      };
    case QUANTITY:
      const meal = state.meals.map((meal) =>
        meal.idMeal === action.id ? { ...meal, qty: action.qty } : meal
      );
      return { ...state, meals: [...meal] };
    case MEAL_SEARCH:
      return { ...state, mealSearchId: action.searchText };
    case FILTER_BY_PRICE:
      if (action.payload === "ALL") {
        return { ...state, visibilityAll: action.filter, mealSearchId: null };
      }
      return { ...state, visibilityAll: action.filter };
    default:
      return state;
  }
}

function cartMeals(state = cartArr, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return setCart(state, action.mealObj);
    case DELETE_MEAL:
      return deleteMeal(action.id, state);
    case UPDATE_QTY:
      const newArr = state.map((ele) =>
        ele.idMeal === action.id ? { ...ele, qty: action.qty } : ele
      );
      setLocal(newArr);
      return newArr;
    default:
      return state;
  }
}

const mealApp = combineReducers({
  mealList,
  cartMeals,
});

export default mealApp;
