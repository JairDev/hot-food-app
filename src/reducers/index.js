import { combineReducers } from "redux";
import { REQUEST_MEALS, RECEIVE_MEALS} from "../actions"

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
        items: action.meals
      })
    default:
      return state
  }
}

export default mealList