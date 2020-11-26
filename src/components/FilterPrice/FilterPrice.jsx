import React from "react"

const FilterPrice = () => {
  return (
    <div className="content-filter-price">
      <div className="title-filter-price mb-4">
        <span className="span-filter-price text-lg font-semibold">Filter by</span>
      </div>
      <form action="">
        <div className="price-80-150">
          <input type="checkbox"/>
          <span className="span-80-150 ml-4">$80 - $150</span>
        </div>
        <div className="price-150-316">
          <input type="checkbox"/>
          <span className="span-150-316 ml-4">$150 - $316</span>
        </div>
      </form>
    </div>
  )
}

export default FilterPrice
