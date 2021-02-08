import { createSelector } from "reselect";

const meals = (state) => state.mealList.sliceMeals;
const filterByPrice = (state) => state.mealList.visibilityAll;
const getKeyword = (state) => state.mealList.mealSearchId;
const mealsAll = (state) => state.mealList.meals;

function filterMeals(array, keyword) {
  return array.filter((meal) => {
    const regex = new RegExp(keyword, "gi");
    return meal.strMeal.match(regex);
  });
}

export const getVisibleAllMeals = createSelector(
  [filterByPrice, mealsAll],
  (filterPrice, allMeals) => {
    switch (filterPrice) {
      case "ALL":
        return allMeals;
      case "LESS_150":
        return allMeals.filter((meal) => meal.price <= 150);
      case "GREATER_150":
        return allMeals.filter((meal) => meal.price >= 150);
      default:
        return allMeals;
    }
  }
);

export const getVisibleByKeyword = createSelector(
  [getVisibleAllMeals, getKeyword],
  (visibleAllMeals, keyword) => {
    if (keyword) {
      return filterMeals(visibleAllMeals, keyword);
    }
    return visibleAllMeals;
  }
);
