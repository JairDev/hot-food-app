import FilterableProducts from "components/FilterableProducts/FilterableProducts";
import Header from "components/Header/Header";
import React, { useEffect, useState } from "react";
import getMeals from "services";
import data from "../../data-price/data-price.json";

function filterMeals(array, searchText) {
  const regex = new RegExp(searchText, "gi");
  return array.filter((meal) => meal.strMeal.match(regex));
}

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [searchMeal, setSearchMeals] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getMeals(data).then((res) => setMeals(res.meals));
    setSearchMeals([...meals])
    // return () => {
    //   cleanup
    // }
  }, [meals]);
  console.log("-")
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    const arrMeals = [...meals]
    const searchResult = filterMeals(arrMeals, searchText);
    console.log(searchResult);
    setSearchMeals(searchResult)
    setSearchText("");
    e.preventDefault();
  };
  return (
    <>
      <Header
        searchText={searchText}
        onChange={handleChange}
        onSubmit={handleSubmit}
        searchResult={meals}
      />
      <section className="App-menu p-4 lg:p-24">
        <div className="content-menu-title flex justify-center my-16 font-semibold relative">
          <h2 className="menu-title text-4xl lg:text-6xl">Tasty Menu</h2>
        </div>
        <FilterableProducts meals={searchMeal} />
      </section>
    </>
  );
};

export default Home;
