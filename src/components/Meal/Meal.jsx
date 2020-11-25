import React from "react"

const Meal = ({name, mealSrc, price}) => {
  return (
    <div className="content-meal w-2/5 flex flex-col justify-between mb-8 relative">
      <div className="img-meal mb-4">
        <img className="w-full object-cover" src={mealSrc} alt="name"/>
      </div>
      <div className="content-meal-all flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
        <div className="meal-description mb-4 relative z-50">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div className="content-price mb-4 relative z-50">
          <span>${price}</span>
        </div>
        <div className="content-more-view relative z-50">
          <span>View more</span>
        </div>
      </div>
    </div>
  )
}

export default Meal
 