export const REQUEST_MEALS = "REQUEST_MEALS"
export const RECEIVE_MEALS = "RECEIVE_MEALS"

export function requestMeals() {
  return {
    type: REQUEST_MEALS,
  }
}

export function receiveMeals(json) {
  return {
    type: RECEIVE_MEALS,
    meals: json.categories.map(child => child)
  }
}

export function fetchMeals() {
  return function(dispatch) {
    dispatch(requestMeals())
    return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(json => dispatch(receiveMeals(json)))
  }
}