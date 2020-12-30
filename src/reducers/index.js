import { act } from "@testing-library/react";
import { combineReducers } from "redux";
import findIndex from "../utils/thisItemExist"
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

const cartArr = JSON.parse(localStorage.getItem("meals")) || [];

function filterMeals(array, keyword) {
  return array.filter((meal) => {
    const regex = new RegExp(keyword, "gi");
    return meal.strMeal.match(regex);
  });
}

const initialState = {
  isFetching: false,
  meals: [],
  cartMeals: cartArr,
  id: "",
  qty: 1,
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
    case ADD_TO_CART:
      console.log(action.payload);
      return {
        ...state,
        cartMeals: setCart(state.cartMeals, action.payload, state.qty),
      };
    case QUANTITY:
      return { ...state, qty: action.payload };
    case UPDATE_QTY:
      const item = action.payload.item
      const qty = action.payload.qty
      const id = action.payload.item.strMeal
      const findIdx = findIndex(state.cartMeals, id)
      const copyArrCart = [...state.cartMeals];
      const obj = createCopyObj(item, qty)
      copyArrCart.splice(findIdx, 1, obj);
      localStorage.setItem("meals", JSON.stringify(copyArrCart));
      return { ...state, cartMeals: copyArrCart };
    case DELETE_MEAL:
      return {
        ...state,
        cartMeals: deleteMeal(action.payload, state.cartMeals),
      };
    default:
      return state;
  }
}

function createCopyObj(item, qty) {
 const obj = Object.assign({}, {
   ...item,
   qty
 }) 
  return obj
}

function setCart(cart, item, qty) {
  const copyCart = [...cart];
  const obj = createCopyObj(item, qty)
  const itemExist = exist(copyCart, obj);
  localStorage.setItem("meals", JSON.stringify(itemExist));
  return itemExist;
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

function mealAddToCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state, action.payload);
    //return exist(state, action.payload)
    case DELETE_MEAL:
      console.log(action.payload, state);
    //return deleteMeal(action.payload, state)
    case QUANTITY:
      console.log(state);
    default:
      return state;
  }
}

function qtyy(state = 1, action) {
  switch (action.payload) {
    case QUANTITY:
      return action.payload;
    default:
      return state;
  }
}

function exist(arr, item) {
  const find = arr.findIndex((meal) => meal.strMeal === item.strMeal);

  if (find === -1) {
    localStorage.setItem("meals", JSON.stringify([...arr, item]));
    return [...arr, item];
  } else {
    return arr;
  }
}

function deleteMeal(id, array) {
  const resultDelete = array.filter((meal) => meal.strMeal !== id);
  localStorage.setItem("meals", JSON.stringify(resultDelete));
  return resultDelete;
}

const mealApp = combineReducers({
  mealList,
  visibilityAll,
  mealSearchId
});

export default mealApp;
