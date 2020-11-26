import FilterPrice from "components/FilterPrice/FilterPrice"
import MealsList from "components/MealsList/MealsList"
import React from "react"

const FilterableProducts = ({meals}) => {
  return (
    <>
      <FilterPrice/>
      <div className="content-meals-menu flex flex-wrap justify-between mt-16">
        <MealsList array={meals}/>
      </div>
    </>
  )
}

export default FilterableProducts
