import MealsList from "components/MealsList/MealsList";
import { combineReducers } from "redux";
import { REQUEST_MEALS, RECEIVE_MEALS, FILTER_BY_PRICE, MEAL_SEARCH, ADD_TO_CART} from "../actions"

const initialState = {
  isFetching: false,
  meals: []
};


function mealList(state = initialState, action) {
  switch(action.type) { 
    case REQUEST_MEALS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_MEALS:
      return Object.assign({}, state, {
        isFetching: false,
        meals: action.payload
      })
    default:
      return state
  }
}

function visibilityAll (state = "ALL", action) {
  switch (action.type) {
    case FILTER_BY_PRICE:
      return action.payload
    default:
      return state   
  }
}

function mealSearchId(state = null, action) {
  switch(action.type) {
    case MEAL_SEARCH:
      return action.payload
    default:
      return state
  }
}

function mealAddToCart(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      console.log(state)
      return exist(state, action.payload.id, action.payload.mealObj)
    default:
      return state
  }
}
function exist(state, id, item) {
  const find = state.findIndex(meal => meal.strMeal === id)
  if(find === -1) {
    localStorage.setItem("meals", JSON.stringify([...state, item]))
    return [...state, item]
  }else {
    return state
  }

}
const mealApp = combineReducers({
  mealList,
  visibilityAll,
  mealSearchId,
  mealAddToCart
})

export default mealApp