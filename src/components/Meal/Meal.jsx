import React from "react"

const Meal = ({name, mealSrc, price, onClick}) => {
  return (
    <div className="content-meal-style w-2/5 lg:w-w30">
      <div className="content-meal flex flex-col justify-between mb-8 relative h-full">
        <div className="img-meal mb-4 relative z-50">
          <img className="w-full object-cover" src={mealSrc} alt="name"/>
        </div>
        <div className="content-meal-all flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
          <div className="meal-description mb-4 relative z-40">
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className="content-price mb-4 relative z-50 font-semibold">
            <span>${price}</span>
          </div>
          <div className="content-more-view relative z-50 text-buttoncolor font-semibold">
            <span data-id={name} onClick={onClick}>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meal
 