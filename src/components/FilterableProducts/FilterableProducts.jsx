import { fetchMeals } from "actions";
import FilterPrice from "components/FilterPrice/FilterPrice";
import MealsList from "components/MealsList/MealsList";
import SearchBar from "components/SearchBar/SearchBar";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getVisibleAllMeals, getVisibleByKeyword } from "selectors";
import getMeals from "services";
import addToCart from "utils/addToCart";
import data from "../../data-price/data-price.json";

const FilterableProducts = ({ dispatch, meals }) => {
  const [storage, setStorage] = useLocalStorage();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    meals: getVisibleByKeyword(state),
  };
};

export default connect(mapStateToProps, null)(FilterableProducts);
