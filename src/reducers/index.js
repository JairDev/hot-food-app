import MealsList from "components/MealsList/MealsList";
import { combineReducers } from "redux";
import { REQUEST_MEALS, RECEIVE_MEALS, FILTER_BY_PRICE, MEAL_SEARCH} from "../actions"

const initialState = {
  isFetching: false,
  meals: []
};


function mealList(state = initialState, action) {
  console.log("actions", action.type)
  switch(action.type) { 
    case REQUEST_MEALS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_MEALS:
      console.log(action)
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


const mealApp = combineReducers({
  mealList,
  visibilityAll,
  mealSearchId
})

export default mealApp