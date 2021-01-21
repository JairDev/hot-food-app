import { fetchMeals } from "actions";
import FilterPrice from "components/FilterPrice/FilterPrice";
import MealsList from "components/MealsList/MealsList";
import SearchBar from "components/SearchBar/SearchBar";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getVisibleByKeyword } from "selectors";

const filterProps = ["ALL", "LESS_150", "GREATER_150"];

const FilterableProducts = ({ dispatch, meals }) => {
  const ref = useRef();
  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);
  console.log("render")

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
        {filterProps.map((item, i) => {
          return (
            <FilterPrice key={item} filter={item} ref={ref}>
              {item}
            </FilterPrice>
          );
        })}
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
