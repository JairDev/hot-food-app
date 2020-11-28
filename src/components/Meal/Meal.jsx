import Price from "components/Price/Price"
import React, { useState } from "react"

const Meal = ({name, mealSrc, price, onClick}) => {
  const [qty, setQty] = useState(0)
  const handleChange = (e) => {
    setQty(e.target.value)
  }
  return (
    <div className={`content-meal-style w-2/5 lg:w-w30`}>
      <div className="content-meal flex flex-col justify-between mb-8 relative h-full">
        <div className="img-meal mb-4 relative z-50">
          <img className="w-full object-cover" src={mealSrc} alt="name"/>
        </div>
        <div className="content-meal-all flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
          <div className="meal-description mb-4 relative z-40">
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className="content-price-qty flex justify-between w-full relative z-50">
            <div className="content-qty">
              <form action="">
                <select onChange={handleChange} name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
            </div>
            <Price children={price}/>
          </div>
          <div className="content-add-to-cart relative z-50 text-buttoncolor font-semibold">
            <span data-id={name} data-qty={qty} onClick={onClick}>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meal
 