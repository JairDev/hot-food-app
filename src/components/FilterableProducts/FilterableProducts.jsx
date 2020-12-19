import { fetchMeals } from "actions";
import FilterPrice from "components/FilterPrice/FilterPrice";
import MealsList from "components/MealsList/MealsList";
import SearchBar from "components/SearchBar/SearchBar";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import getMeals from "services";
import addToCart from "utils/addToCart";
import data from "../../data-price/data-price.json";

function filterMeals(array, keyword) {
  return array.filter((meal) => {
    const regex = new RegExp(keyword, "gi");
    return meal.strMeal.match(regex);
  });
}

///////////////////////////////

const FilterableProducts = (props) => {
  // const [meals, setMeals] = useState([]);
  // const [mealsList, setMealsList] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [storage, setStorage] = useLocalStorage();
  // const [textLabel, setTextLabel] = useState("");
  const { dispatch, meals } = props;
  console.log("----- props", props);
  useEffect(() => {
    // getMeals(data).then((res) => setMeals(res.meals));
    // setMealsList(meals)
    // return () => {
    //   cleanup
    // }
    // console.log(meals)
    // setMealsList(meals)
    dispatch(fetchMeals());
  }, [dispatch]);

  const handletextInput = (e) => {
    setTextSearch(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   // const resultFilter =  filterMeals(meals, textSearch)
  //   // console.log(resultFilter)
  //   // // const label = resultFilter.map(meal => {
  //   // //   const regex = new RegExp(textSearch, "gi")
  //   // //   const mealName = meal.strMeal.replace(regex, `<span>${textSearch}</span>`)
  //   // //   meal.strMeal = mealName
  //   // //   console.log(mealName)
  //   // //   console.log(regex)
  //   // //   return meal
  //   // // })
  //   // // console.log(label)
  //   // setMealsList(resultFilter)
  //   // // setTextLabel(textSearch)
  //   // setTextSearch("");
  //   e.preventDefault()
  // };

  // const handleClick = (e, meal) => {
  //   const qty = parseInt(e.target.dataset.qty)
  //   addToCart(meal, qty, storage, setStorage)
  //   e.preventDefault()
  // }
  // console.log("props", props)
  return (
    <>
      <div className="App-content-search-bar w-full flex justify-center mt-4 mb-12 lg:w-auto relative z-50 ">
        <SearchBar />
      </div>
      <section className="content-price">
        <div className="title-filter-price mb-4">
          <span className="span-filter-price text-lg font-semibold">
            Filter by
          </span>
        </div>
        <FilterPrice filter="LESS_150">$80 - $150</FilterPrice>
        <FilterPrice filter="GREATER_150">$150 - $316</FilterPrice>
      </section>
      <div className="content-meals-menu flex flex-wrap justify-between mt-16">
        <MealsList array={meals} id={"mealshome"} />
      </div>
    </>
  );
};



function mealsAll(all, filter) {
  console.log("all", all);
  switch (filter) {
    case "ALL":
      return all.meals;
    case "LESS_150":
      return all.meals.filter((meal) => meal.price < 150);
    case "GREATER_150":
      return all.meals.filter((meal) => meal.price > 150);
    default:
      return all;
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    meals: mealsAll(state.mealList, state.visibilityAll),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => console.log(e),
  };
};

const All = connect(mapStateToProps, null)(FilterableProducts);
export default All;
