import FilterPrice from "components/FilterPrice/FilterPrice";
import MealsList from "components/MealsList/MealsList";
import SearchBar from "components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import getMeals from "services";
import data from "../../data-price/data-price.json";

function filterMeals(array, keyword) {
  return array.filter(meal => {
    const regex = new RegExp(keyword, "gi")
    return meal.strMeal.match(regex)
  })
}

///////////////////////////////

const FilterableProducts = ({onCart}) => {
  const [meals, setMeals] = useState([]);
  const [mealsList, setMealsList] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [textLabel, setTextLabel] = useState("");
  const arr = []
  useEffect(() => {
    getMeals(data).then((res) => setMeals(res.meals));
    setMealsList(meals)
    // return () => {
    //   cleanup
    // }
  }, [meals]);

  const handletextInput = (e) => {
    setTextSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    const resultFilter =  filterMeals(meals, textSearch)
    // const label = resultFilter.map(meal => {
    //   const regex = new RegExp(textSearch, "gi")
    //   const mealName = meal.strMeal.replace(regex, `<span>${textSearch}</span>`) 
    //   meal.strMeal = mealName
    //   console.log(mealName)
    //   console.log(regex)
    //   return meal
    // })
    // console.log(label)
    setMealsList(resultFilter)
    setTextLabel(textSearch)
    setTextSearch("");
    e.preventDefault()
  };

  const handleClick = (e) => {
    const id = e.target.dataset.id
    const qty = parseInt(e.target.dataset.qty)
    const find = meals.find(meal => meal.strMeal === id)
    onCart(find, qty, id)
    console.log(id, qty)
  }

  return (
    <>
      <div className="App-content-search-bar w-full flex justify-center mt-4 mb-12 lg:w-auto relative z-50 ">
        <SearchBar onChange={handletextInput} onSubmit={handleSubmit} textSearch={textSearch} />
      </div>
      <FilterPrice />
      <div className="content-meals-menu flex flex-wrap justify-between mt-16">
        <MealsList array={mealsList} onClick={handleClick} id={"mealshome"} />
      </div>
    </>
  );
};

export default FilterableProducts;
