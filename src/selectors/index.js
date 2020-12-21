import { createSelector } from "reselect";

const meals = (state) => state.mealList.meals;
const filterByPrice = (state) => state.visibilityAll;
const getKeyword = (state) => state.mealSearchId

function filterMeals(array, keyword) {
  return array.filter((meal) => {
    const regex = new RegExp(keyword, "gi");
    return meal.strMeal.match(regex);
  });
}

export const getVisibleAllMeals = createSelector(
  [filterByPrice, meals],
  (filterPrice, allMeals) => {
    switch (filterPrice) {
      case "ALL":
        return allMeals;
      case "LESS_150":
        return allMeals.filter((meal) => meal.price < 150);
      case "GREATER_150":
        return allMeals.filter((meal) => meal.price > 150);
      default:
        return allMeals;
    }
  }
);

export const getVisibleByKeyword = createSelector (
  [getVisibleAllMeals, getKeyword],
  (visibleAllMeals, keyword) => {
    if(!keyword) {
      return visibleAllMeals
    }else {
      return filterMeals(visibleAllMeals, keyword)
    }
  }
)
