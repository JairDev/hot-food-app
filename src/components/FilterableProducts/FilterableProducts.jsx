import { fetchMeals, nextPage } from "actions";
import FilterPrice from "components/FilterPrice/FilterPrice";
import MealsList from "components/MealsList/MealsList";
import SearchBar from "components/SearchBar/SearchBar";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getVisibleByKeyword } from "selectors";
import { nearScreen } from "utils/nearScreen";

const filterProps = [
  { action: "ALL", label: "ALL" },
  { action: "LESS_150", label: "$80 - $150" },
  { action: "GREATER_150", label: "$150 - $316" },
];

const FilterableProducts = ({
  callApi,
  meals,
  callObserver,
  callObserverHeader,
}) => {
  const ref = useRef([]);
  const refObserver = useRef(null);
  const refForHeader = useRef(null);

  useEffect(() => {
    if (!meals.length) {
      callApi();
    }
    console.log("effect home");
    callObserver(refObserver.current);
    callObserverHeader(refForHeader.current);
  }, [callApi, callObserver, callObserverHeader]);

  return (
    <>
      <div className="App-content-search-bar w-full flex justify-center mt-4 mb-12 lg:w-auto relative z-50 ">
        <SearchBar />
      </div>
      <section ref={refForHeader} className="wrap-content lg:flex">
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
                forwardRef={(el) => (ref.current[i] = el)}
                arr={ref.current}
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
      <div className="observer" ref={refObserver}></div>
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
    callObserver: (ref) => {
      const options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
      };
      nearScreen(options, ref, dispatch, nextPage);
    },
    callApi: () => dispatch(fetchMeals()),
    callObserverHeader: (ref) => {
      const options = {
        root: null,
        rootMargin: "0px 0px -600px 0px",
      };
      nearScreen(options, ref);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProducts);
