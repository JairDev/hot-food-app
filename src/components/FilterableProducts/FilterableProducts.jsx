import { fetchMeals } from "actions";
import FilterPrice from "components/FilterPrice/FilterPrice";
import MealsList from "components/MealsList/MealsList";
import SearchBar from "components/SearchBar/SearchBar";
import { useNearScreen } from "hooks/useNearScreen/useNearScreen";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getVisibleAllMeals, getVisibleByKeyword } from "selectors";

const filterProps = [
  { action: "ALL", label: "ALL" },
  { action: "LESS_150", label: "$80 - $150" },
  { action: "GREATER_150", label: "$150 - $316" },
];

const FilterableProducts = ({ callApi, meals }) => {
  const refPrice = useRef([]);
  const { ref } = useNearScreen("0px 0px -600px 0px");

  useEffect(() => {
    callApi();
  }, [callApi]);

  return (
    <>
      <div className="App-content-search-bar w-full flex justify-center mt-4 mb-12 lg:w-auto relative z-50 ">
        <SearchBar />
      </div>
      <section
        ref={ref}
        data-observer="observer-header"
        className="wrap-content lg:flex"
      >
        <div className="content-price lg:flex-initial lg:self-start lg:my-16 lg:pr-8 lg:sticky lg:top-20 text-primary">
          <div className="title-filter-price mb-4">
            <span className="span-filter-price text-lg font-semibold">
              Filter by
            </span>
          </div>
          {filterProps.map((item, i) => {
            return (
              <FilterPrice
                key={item.action}
                filter={item.action}
                forwardRef={(el) => (refPrice.current[i] = el)}
                arr={refPrice.current}
                tag={item.action}
              >
                {item.label}
              </FilterPrice>
            );
          })}
        </div>
        <div className="content-meals-menu flex lg:flex-1 flex-wrap flex-col items-center md:flex-row justify-between mt-16">
          <MealsList array={meals} id={"mealshome"} />
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    meals: getVisibleByKeyword(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callApi: () => dispatch(fetchMeals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProducts);
