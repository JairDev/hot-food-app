import { combineReducers } from "redux";
import findIndex from "../utils/thisItemExist";
import createNewObj from "../utils/createNewObj";
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

const initialState = {
  isFetching: false,
  meals: [],
  cartMeals: cartArr,
  qty: 1,
  mealSearchId: null,
  visibilityAll: "ALL",
};

function mealList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MEALS:
      return { ...state, isFetching: true };
    case RECEIVE_MEALS:
      return { ...state, isFetching: false, meals: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cartMeals: setCart(state.cartMeals, action.payload, state.qty),
      };
    case QUANTITY:
      return { ...state, qty: action.payload };
    case UPDATE_QTY:
      const item = action.payload.item;
      const qty = action.payload.qty;
      const id = action.payload.item.strMeal;
      const findIdx = findIndex(state.cartMeals, "strMeal", id);
      const copyArrCart = [...state.cartMeals];
      const obj = createNewObj(item, qty);
      copyArrCart.splice(findIdx, 1, obj);
      localStorage.setItem("meals", JSON.stringify(copyArrCart));
      return { ...state, cartMeals: copyArrCart };
    case DELETE_MEAL:
      return {
        ...state,
        cartMeals: deleteMeal(action.payload, state.cartMeals),
      };
    case MEAL_SEARCH:
      console.log(action.payload);
      return { ...state, mealSearchId: action.payload };
    case FILTER_BY_PRICE:
      if (action.payload === "ALL") {
        return { ...state, visibilityAll: action.payload, mealSearchId: null };
      }
      return { ...state, visibilityAll: action.payload };
    default:
      return state;
  }
}

function setCart(cart, item, qty) {
  const copyCart = [...cart];
  const obj = createNewObj(item, qty);
  const itemExist = exist(copyCart, obj);
  localStorage.setItem("meals", JSON.stringify(itemExist));
  return itemExist;
}

//function visibilityAll(state = "ALL", action) {
//  switch (action.type) {
//    case FILTER_BY_PRICE:
//      return action.payload;
//    default:
//      return state;
//  }
//}

//function mealSearchId(state = null, action) {
//  switch (action.type) {
//    case MEAL_SEARCH:
//      return action.payload;
//    default:
//      return state;
//  }
//}

function exist(arr, item) {
  const id = item.strMeal;
  const findIdx = findIndex(arr, "strMeal", id);

  if (findIdx === -1) {
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
  //visibilityAll,
  //mealSearchId,
});

export default mealApp;
