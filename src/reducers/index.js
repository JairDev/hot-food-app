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
  PAGINATION,
} from "../actions";

const cartArr = JSON.parse(localStorage.getItem("meals")) || [];

const initialState = {
  isFetching: false,
  meals: [],
  sliceMeals: [],
  mealSearchId: null,
  visibilityAll: "ALL",
  page: 0,
  numberPerPage: 3,
};

function mealList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MEALS:
      return { ...state, isFetching: true };
    case RECEIVE_MEALS:
      return {
        ...state,
        isFetching: false,
        page: state.page + 1,
        meals: action.payload,
        sliceMeals: sliceArr(action.payload, state.page, state.numberPerPage),
      };
    case PAGINATION:
      return {
        ...state,
        page: state.page + 1,
        sliceMeals: state.sliceMeals.concat(
          sliceArr(state.meals, state.page, state.numberPerPage)
        ),
      };
    case QUANTITY:
      console.log(action);
      const meal = state.sliceMeals.map((meal) =>
        meal.idMeal === action.id ? { ...meal, qty: action.qty } : meal
      );
      return { ...state, sliceMeals: [...meal] };
    case UPDATE_QTY:
      const newArr = state.cartMeals.map((ele) =>
        ele.idMeal === action.id ? { ...ele, qty: action.qty } : ele
      );
      localStorage.setItem("meals", JSON.stringify(newArr));
      return { ...state, cartMeals: newArr };
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
      console.log(state);
      return deleteMeal(action.id, state);
    default:
      return state;
  }
}

function sliceArr(arr, page, numberPerPage) {
  const start = numberPerPage * page;
  const end = numberPerPage + start;
  const copyCart = arr.slice(start, end);
  return copyCart;
}

function setCart(cart, item, qty) {
  const copyCart = [...cart];
  const obj = createNewObj(item);
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
    const pushItem = [...arr, item];
    setLocal(pushItem);
    return [...arr, item];
  } else {
    return arr;
  }
}

function deleteMeal(id, array) {
  const deleteResult = array.filter((meal) => meal.strMeal !== id);
  localStorage.setItem("meals", JSON.stringify(deleteResult));
  return deleteResult;
}

function setLocal(item) {
  return localStorage.setItem("meals", JSON.stringify(item));
}

const mealApp = combineReducers({
  mealList,
  //visibilityAll,
  //mealSearchId,
  cartMeals,
});

export default mealApp;
